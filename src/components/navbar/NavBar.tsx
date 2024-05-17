import React from "react";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  return (
    <>
      <div className="inner-content">
        <h1 className="logo">
          Rocket<span>Store</span>
        </h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>

        <div className="navs-icon-container">
            <div className="search-input-container">
              <input type="search" placeholder="Procurar" />
              <FaSearch />
            </div>
            <button className="shopping-cart">
              <FaShoppingCart/>
              <div className="products-count">0</div>
            </button>
            <button className="menu-button">
              <FaBars/>
            </button>
        </div>
      </div>
    </>
  );
};
