import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PaymentSuccess() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h2 className="success-text">Payment Successful</h2>
      <div className="receipt-box">
        <h3>Mock Receipt</h3>
        <p>Receipt No: 123455</p>
        <p>CAN No: {state?.can || '---'}</p>
        <p>Amount Paid: ₹{state?.amount || '---'}</p>
      </div>
    </div>
  );
}
