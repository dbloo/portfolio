const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

admin.initializeApp();

exports.createCheckoutSession = functions.https.onCall(async (data, context) => {
  // Validate auth
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'Not logged in');

  // Firestore transaction to check inventory
  const productRefs = data.items.map(item => 
    admin.firestore().doc(`products/${item.id}`)
  );

  const products = await admin.firestore().runTransaction(async (tx) => {
    const snaps = await tx.getAll(...productRefs);
    return snaps.map(snap => snap.data());
  });

  // Create Stripe session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: data.items.map((item, i) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: products[i].name },
        unit_amount: products[i].price,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${process.env.HOSTING_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.HOSTING_URL}/cart`,
    metadata: { userId: context.auth.uid }
  });

  return { sessionId: session.id };
});


exports.updateInventory = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snap, context) => {
    const order = snap.data();
    const batch = admin.firestore().batch();

    order.items.forEach(item => {
      const productRef = admin.firestore().doc(`products/${item.id}`);
      batch.update(productRef, {
        'inventory.available': admin.firestore.FieldValue.increment(-item.quantity),
        'inventory.sold': admin.firestore.FieldValue.increment(item.quantity)
      });
    });

    await batch.commit();
  });