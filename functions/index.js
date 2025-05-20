// const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const {onRequest} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const stripeLib = require("stripe");

admin.initializeApp();


const db = admin.firestore();


let stripe;
const stripeSecret = defineSecret("STRIPE_SECRET_KEY");


const getStripe = async () => {
  if (stripe) return stripe;

  const key =
    process.env.FUNCTIONS_EMULATOR === "true" ?
      process.env.REACT_APP_STRIPE_SECRET_KEY_TEST_KEY || process.env.REACT_APP_STRIPE_SECRET_KEY :
      await stripeSecret.value();

  stripe = stripeLib(key);

  console.log("Using Stripe key:", key ? "exists" : "missing");

  return stripe;
};


const app = express();


const corsOptions = {
  origin: ["https://dominicbloomfield.com"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};


app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json({
  verify: (req, res, buf) => {
    if (req.originalUrl.startsWith("/stripe/webhook")) {
      req.rawBody = buf.toString();
    }
  },
}));

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  console.log("Origin:", req.headers.origin);
  console.log("Headers:", req.headers);
  next();
});


app.post("/checkout", async (req, res) => {
  try {
    const stripe = await getStripe();


    const {items, userId} = req.body;

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({error: "Items must be provided"});
    }

    if (!userId) {
      return res.status(401).json({error: "User ID is required"});
    }


    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB"],
      },
      shipping_options: [
        {
          shipping_rate_data:
            {
              display_name: "Domestic Shipping (US)",
              type: "fixed_amount",
              fixed_amount: {amount: 500, currency: "usd"},
              delivery_estimate: {
                minimum: {unit: "business_day", value: 5},
                maximum: {unit: "business_day", value: 10},
              },
            },
        },


        {
          shipping_rate_data:

          {
            display_name: "International Shipping",
            type: "fixed_amount",
            fixed_amount: {amount: 1500, currency: "usd"},
            delivery_estimate: {
              minimum: {unit: "business_day", value: 10},
              maximum: {unit: "business_day", value: 15},
            },
          },
        },


      ],

      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: `${item.name} - ${item.size} - ${item.materials} x ${item.quantity}`,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url:
      process.env.FUNCTIONS_EMULATOR === "true" ?
                  "http://localhost:3000/#/success?session_id={CHECKOUT_SESSION_ID}" :
            "https://dominicbloomfield.com/#/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url:
      process.env.FUNCTIONS_EMULATOR === "true" ?
                  "http://localhost:3000/#/checkout" :
            "https://dominicbloomfield.com/#/checkout",
      metadata: {
        productIds: items.map((item) => item.id).join(","),
        productNames: items.map((item) => item.name).join(","),
        productType: items.map((item) => item.type).join(","),
        productSizes: items.map((item)=> item.size).join(","),
        imageUrls: items.map((item) => item.image).join(","),
        userId: userId,

      },
    });


    res.status(200).json({id: session.id});
  } catch (err) {
    console.error("Checkout error:", err.stack || err);
    res.status(500).json({error: err.message});
  }
});


app.post("/webhook", express.raw({type: "application/json"}), async (req, res) => {
  const stripe = await getStripe();


  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.REACT_APP_ENDPOINT_SECRET;

  let event;


  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const productIdsString = String(session.metadata?.productIds) || "";
    const productIds = productIdsString.split(",").map((id) => id.trim());

    const productNamesString = String(session.metadata?.productNames) || "";
    const productNames = productNamesString.split(",").map((id) => id.trim());

    const productTypeString= String(session.metadata?.productType) || "";
    const productType = productTypeString.split(",").map((id) => id.trim());

    const productSizesString= String(session.metadata?.productSizes) || "";
    const productSizes = productSizesString.split(",").map((id) => id.trim());

    let i = 0;

    for (const id of productIds) {
      console.log(productType[i]);
      if (productType[i] === "original") {
        try {
          await db.collection("paintings").doc(id).update({
            available: false,
          });
          console.log(`✅ Marked painting ${id} as sold`);
        } catch (error) {
          console.error(`❌ Failed to update painting ${id}:`, error);
        }
      }

      i++;
    }


    try {
      await db.collection("orders").add({
        userId: session.collected_information.shipping_details.name + session.collected_information.shipping_details.name[(Math.random(2)*7).toFixed(0)]+ (Math.random()*1000).toFixed(0),
        name: session.collected_information.shipping_details.name || null,
        customerEmail: session.customer_details?.email || null,
        shippingAddress: {
          line1: session.collected_information.shipping_details.address.line1 ?? null,
          line2: session.collected_information.shipping_details.address.line2 ?? null,
          city: session.collected_information.shipping_details.address.city ?? null,
          state: session.collected_information.shipping_details.address.state ?? null,
          postal_code: session.collected_information.shipping_details.address.postal_code ?? null,
          country: session.collected_information.shipping_details.address.country ?? null,
        },
        amountTotal: session.amount_total / 100,
        currency: session.currency || "usd",

        productIds: productIds,
        productNames: productNames,
        productType: productType,
        productSizes: productSizes,
      });
      console.log("✅ Order saved to Firestore");
    } catch (e) {
      console.error("❌ Failed to write order:", e);
    }
  }


  res.status(200).json({received: true});
},
);


app.get("/session/:id", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id);
    res.json(session);
  } catch (err) {
    console.error("Failed to retrieve session:", err.message);
    res.status(500).json({error: "Could not retrieve session"});
  }
});


// Firestore trigger (unchanged)
// exports.updateInventory = onDocumentCreated(
//     {document: "orders/{orderId}", secrets: [stripeSecret]},
//     async (event) => {
//     // Your existing Firestore logic
//     },
// );

// Export the HTTP function
exports.api = onRequest(
    {
      secrets: [stripeSecret],
    },
    app,
);
