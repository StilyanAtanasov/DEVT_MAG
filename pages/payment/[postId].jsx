import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const router = useRouter();
  const { postId, price } = router.query; // Get postId and price from the query

  useEffect(() => {
    fetch("/api/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    // Use the postId and price to create the payment intent
    fetch("/api/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({ price }),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, [postId, price]);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
