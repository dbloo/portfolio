const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")(functions.config().stripe.secret);
const express = require("express");

admin.initializeApp();

const app = express();
app.use(express.json());

app.post("/checkout", async (req, res) => {
  try {
    const {items, userId} = req.body;

    if (!userId) {
      return res.status(401).json({error: "User ID is required"});
    }

    const productRefs = items.map((item) =>
      admin.firestore().doc(`products/${item.id}`),
    );

    const products = await admin.firestore().runTransaction(async (tx) => {
      const snaps = await tx.getAll(...productRefs);
      return snaps.map((snap) => snap.data());
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item, i) => ({
        price_data: {
          currency: "usd",
          product_data: {name: products[i].name},
          unit_amount: products[i].price,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
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
          "inventory.available": admin.firestore.FieldValue.increment(
              -item.quantity,
          ),
          "inventory.sold": admin.firestore.FieldValue.increment(item.quantity),
        });
      });

      await batch.commit();
    });
