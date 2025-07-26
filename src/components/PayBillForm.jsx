import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PayBillForm() {
  const [can, setCan] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleFetchBill = () => {
    if (can && mobile) {
      navigate('/bill', {
        state: {
          name: 'Ravi Kumar',
          amount: 320,
          date: '30–07–2025',
          can,
        }
      });
    }
  };

  return (
    <div className="container">
      <h2>Pay Bill</h2>
      <input placeholder="CAN Number" value={can} onChange={e => setCan(e.target.value)} />
      <input placeholder="Mobile Number" value={mobile} onChange={e => setMobile(e.target.value)} />
      <button onClick={handleFetchBill}>Fetch Bill</button>
    </div>
  );
}
