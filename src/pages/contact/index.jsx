import { ContactForm } from "../../components/contactForm";
import { NavBar } from "../../components/navbar/NavBar";
import "./contact.css";
import React from "react";

export const Contact = () => {
  return (
    <>
      <NavBar/>
      <ContactForm />
    </>
  );
};
