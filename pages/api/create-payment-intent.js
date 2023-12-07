import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

export default async (req, res) => {
  try {
    // Parse the price from the request body
    const { price } = JSON.parse(req.body);

    if (price === undefined) {
      return res.status(400).json({
        error: {
          message: "Price is required.",
        },
      });
    }

    const amount = parseInt(price) * 100; // Convert the price to an integer

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: amount,
      automatic_payment_methods: { enabled: true },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    res.status(400).json({
      error: {
        message: e.message,
      },
    });
  }
};
