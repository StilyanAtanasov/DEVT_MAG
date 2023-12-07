import { useState } from "react";

export default function Home() {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async () => {
    try {
      const response = await fetch("/api/create-charge", {
        method: "POST",
      });

      if (response.status === 200) {
        const data = await response.json();
        window.location.href = data.charge.data.hosted_url;
        setPaymentStatus(data.message);
      } else {
        const errorData = await response.json();
        setPaymentStatus(errorData.error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setPaymentStatus("An error occurred while creating the charge.");
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Make Payment</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
}
