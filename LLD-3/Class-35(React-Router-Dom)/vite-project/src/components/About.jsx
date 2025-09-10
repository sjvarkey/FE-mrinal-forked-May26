import React from "react";
import "./pages.css";

export default function About() {
  return (
    <div className="page about">
      <h2>About Us</h2>
      <p>
        We’re building a modern social experience with React and modular design. 
        The goal is to keep things fast, simple, and beautiful.
      </p>
      <ul className="features">
        <li><strong>Fast:</strong> Optimized and lightweight.</li>
        <li><strong>Modular:</strong> Easy to extend.</li>
        <li><strong>Beautiful:</strong> Clean UI and smooth styling.</li>
      </ul>
    </div>
  );
}
