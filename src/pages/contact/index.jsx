import { ContactForm } from "../../components/contactForm";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar/NavBar";
import React from "react";

export const Contact = () => {
  return (
    <>
      <NavBar/>
      <ContactForm />
      <Footer/>
    </>
  );
};
