import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PayBillForm from './components/PayBillForm';
import BillDetails from './components/BillDetails';
import PaymentSuccess from './components/PaymentSuccess';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<PayBillForm />} />
        <Route path="/bill" element={<BillDetails />} />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
    </>
  );
}
