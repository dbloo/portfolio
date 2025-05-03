const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { cart } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cart.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: `${item.name} (${item.selectedSize})` },
          unit_amount: item.price,
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cart`,
    });

    return res.status(200).json({ id: session.id });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};