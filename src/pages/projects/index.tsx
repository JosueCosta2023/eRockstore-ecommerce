import "./products.css";
import React from "react";
import { NavBar } from "../../components/navbar/NavBar";

export const Products = () => {
  return (
    <>
      <header className="header-container">
        <NavBar />
      </header>
      <main>
        <h2>Welcome to page Projects</h2>
      </main>
      <footer></footer>
    </>
  );
};
