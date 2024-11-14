import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const logoURL =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg";
  return (
    <header>
      <div className="logo">
        <img src={logoURL} alt="" />
      </div>

      <input
        type="text"
        className="xxx"
        placeholder="Search for Products, Brands and More"
      />
      <ul className="navlist">
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Cart</a>
        </li>
        <li>
          <a href="">Become a Seller</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
