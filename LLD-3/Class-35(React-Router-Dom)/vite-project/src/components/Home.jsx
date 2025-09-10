import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

export default function Home() {
  return (
    <div className="page home">
      <h1>Welcome to Your App</h1>
      <p>A clean starting point for your social app.</p>
      <div className="buttons">
        <Link to="/about" className="btn">Learn More</Link>
        <Link to="/contact" className="btn primary">Contact Us</Link>
      </div>
    </div>
  );
}