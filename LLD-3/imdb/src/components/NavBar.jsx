import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <div className="flex items-center space-x-5">
      <img className="w-[70px]" src={logo} />
      <Link to="/" className="text-white">
        Movies
      </Link>
      <Link to="/watchlist" className="text-white">
        Watchlist
      </Link>
    </div>
  );
}

export default NavBar;
