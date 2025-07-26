import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BillDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Bill</h2>
      <div className="bill-box">
        <p>Name: {state?.name}</p>
        <p>Amount: ₹{state?.amount}</p>
        <p>Due Date: {state?.date}</p>
      </div>
      <button onClick={() => navigate('/success', { state })}>Proceed to Pay</button>
    </div>
  );
}
