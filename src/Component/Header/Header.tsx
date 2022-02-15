import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="row block center ">
      <div className="col-2">
        <Link to="/" className="logo">
          <h1>Yareen Store</h1>
        </Link>
      </div>
      <div className="col-1">
        <Link className="px-3" to="/Signup">
          Signup
        </Link>

        <Link className="px-3" to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
