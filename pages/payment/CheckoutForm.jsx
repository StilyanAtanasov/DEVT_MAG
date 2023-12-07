import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/../buy`,
      },
    });

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsProcessing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#8A2BE2",
        color: "white",
        textAlign: "center",
      }}
    >
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          maxWidth: "500px",
          padding: "20px",
          backgroundColor: "#F0F8FF",
          borderRadius: "5px",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            textTransform: "uppercase",
            marginBottom: "20px",
            color: "purple",
          }}
        >
          Pay
        </h2>
        <PaymentElement
          id="payment-element"
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
            width: "100%",
          }}
        />
        <button
          disabled={isProcessing || !stripe || !elements}
          id="submit"
          style={{
            backgroundColor: "#8A2BE2",
            color: "white",
            padding: "15px 30px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          <span id="button-text">
            {isProcessing ? "Processing ..." : "Pay now"}
          </span>
        </button>
        {message && (
          <div id="payment-message" style={{ marginTop: "20px", color: "red" }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
