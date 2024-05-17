import { AboutMe } from "../../components/aboutMe";
import { NavBar } from "../../components/navbar/NavBar";
import "./about.css";
import React from "react";


export const About = () => {
  return (
    <>
      <NavBar/>
      <main>
        <AboutMe/>
      </main>
    </>
  );
};
