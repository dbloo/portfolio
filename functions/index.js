<<<<<<< HEAD
<<<<<<< HEAD
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const stripeLib = require("stripe");

const db = admin.firestore();

admin.initializeApp();


const stripeSecret = defineSecret("STRIPE_SECRET_KEY");

let stripe;

const app = express();


const corsOptions = {
  origin: true, 
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());


app.post("/checkout", cors(corsOptions), async (req, res) => {
  try {
    
    const key =
      process.env.FUNCTIONS_EMULATOR === "true"
        ? process.env.STRIPE_SECRET_KEY
          || process.env.STRIPE_SECRET_TEST_KEY
        : await stripeSecret.value(); 

    stripe = stripe || stripeLib(key); 
    const { items, userId } = req.body;

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Items must be provided" });
    }

    if (!userId) {
      return res.status(401).json({ error: "User ID is required" });
    }

    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "apple_pay"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: `${item.name} - ${item.size} - ${item.materials} x ${item.quantity}`, 
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100), 
=======
=======
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")(

  process.env.STRIPE_SECRET_KEY

);

const express = require("express");

admin.initializeApp();

const app = express();
app.use(express.json());

app.post("/checkout", async (req, res) => {
  try {
    const {items} = req.body;

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({error: "Items must be provided"});
    }

    const userId = req.body.userId; // Consider using Firebase Auth to get userId

    if (!userId) {
      return res.status(401).json({error: "User ID is required"});
    }

    const productRefs = items.map((item) =>
      admin.firestore().doc(`products/${item.id}`),
    );

    const products = await admin.firestore().runTransaction(async (tx) => {
      try {
        const snaps = await tx.getAll(...productRefs);
        return snaps.map((snap) => snap.data());
      } catch (err) {
        throw new Error("Error fetching product data");
      }
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item, i) => ({
        price_data: {
          currency: "usd",
          product_data: {name: products[i].name},
          unit_amount: products[i].price,
<<<<<<< HEAD
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
=======
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
        },
        quantity: item.quantity,
      })),
      mode: "payment",
<<<<<<< HEAD
<<<<<<< HEAD
      success_url: "/success",
      cancel_url: "/cancel",
      metadata: {
        paintingIds: items.map((item) => item.id).join(","), 
        userId: userId,
      },
    });

    
    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error("Checkout error:", err.stack || err);
    res.status(500).json({ error: err.message });
  }
});

const bodyParser = require("body-parser");
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    const endpointSecret = "your_webhook_secret"; 

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      console.error("⚠️ Webhook signature verification failed.", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const paintingIdsString = session.metadata?.paintingIds || "";
      const paintingIds = paintingIdsString.split(",").map((id) => id.trim());

      for (const id of paintingIds) {
        try {
          await db.collection("paintings").doc(id).update({
            available: false,
          });
          console.log(`✅ Marked painting ${id} as sold`);
        } catch (error) {
          console.error(`❌ Failed to update painting ${id}:`, error);
        }
      }
    }

    res.status(200).json({ received: true });
  }
);



// Firestore trigger (unchanged)
exports.updateInventory = onDocumentCreated(
  { document: "orders/{orderId}", secrets: [stripeSecret] },
  async (event) => {
    // Your existing Firestore logic
  }
);

// Export the HTTP function
exports.api = onRequest(
  {
    secrets: [stripeSecret],
  },
  app
);
=======
=======
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cart`,
      metadata: {userId},
    });

    return res.status(200).json({id: session.id});
  } catch (err) {
    console.error("Checkout error:", err);
    return res.status(500).json({error: err.message});
  }
});

exports.api = functions.https.onRequest(app);

exports.updateInventory = functions.firestore
    .document("orders/{orderId}")
    .onCreate(async (snap) => {
      const order = snap.data();
      const batch = admin.firestore().batch();

      order.items.forEach((item) => {
        const productRef = admin.firestore().doc(`products/${item.id}`);
        batch.update(productRef, {
          "inventory.available": admin.firestore.FieldValue.increment(-item.quantity),
          "inventory.sold": admin.firestore.FieldValue.increment(item.quantity),
        });
      });

      await batch.commit();
    });
<<<<<<< HEAD
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
=======
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
