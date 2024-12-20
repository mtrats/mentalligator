import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/main">Main</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
