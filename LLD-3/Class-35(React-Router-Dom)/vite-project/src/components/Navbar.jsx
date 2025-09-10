import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">My App</div>
      <ul className="nav-links">
        <Link to='/'>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
