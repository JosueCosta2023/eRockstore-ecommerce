import "./about.css";
import React from "react";
import { NavBar } from "../../components/navbar/NavBar";

export const About = () => {
  return (
    <>
      <header className="header-container container">
        <NavBar />
      </header>
      <main>
        <h2>Welcome to page About</h2>
      </main>
      <footer></footer>
    </>
  );
};
