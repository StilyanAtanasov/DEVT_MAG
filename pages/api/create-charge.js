import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const apiKey = "0e5582ef-07be-46d4-a9c4-0bbf7429ceae"; // Replace with your actual API key

    // Get the price from the request body
    const { price } = req.body;

    if (price === undefined) {
      return res.status(400).json({
        error: {
          message: "Price is required.",
        },
      });
    }

    const amount = parseInt(price); // Convert the price to an integer

    const chargeData = {
      name: "Order #123",
      description: "Payment for product or service",
      local_price: {
        amount: amount,
        currency: "USD",
      },
      pricing_type: "fixed_price",
      metadata: {
        order_id: "12345",
        customer_id: "67890",
      },
    };

    const apiUrl = "https://api.commerce.coinbase.com/charges";

    const headers = {
      "Content-Type": "application/json",
      "X-CC-Api-Key": apiKey,
      "X-CC-Version": "2018-03-22", // Use the appropriate API version
    };

    try {
      const response = await axios.post(apiUrl, chargeData, { headers });
      if (response.status === 201) {
        const charge = response.data;
        res
          .status(200)
          .json({ message: "Charge created successfully", charge });
      } else {
        res
          .status(response.status)
          .json({ error: "Charge creation failed", response: response.data });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  } else {
    res.status(405).end();
  }
}
