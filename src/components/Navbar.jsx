import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this file for styling

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="navbar">
      <div className="logo">Hyderabad Water Board</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/pay" onClick={() => setIsOpen(false)}>Pay Bill</Link>
        <Link to="/complaint" onClick={() => setIsOpen(false)}>Complaint</Link>
        <Link to="/account" onClick={() => setIsOpen(false)}>My Account</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}
