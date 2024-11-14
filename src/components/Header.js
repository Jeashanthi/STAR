import React from "react";

import { Link } from "react-router-dom";
import Login from "./Login";

function Header() {
  const logoURL =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg";
  return (
    <header>
      <div className="logo">
        <img src={logoURL} />
      </div>

      <input
        type="text"
        className="xxx"
        placeholder="Search for Products, Brands and More"
      />
      <Login />

      <nav>
        <Link to="/">Home</Link>

        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
