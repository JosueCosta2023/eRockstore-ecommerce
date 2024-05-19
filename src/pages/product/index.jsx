import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar/NavBar";
import { ProductList } from "../../components/productList";
import React from "react";


export const Products = () => {
  return (
    <>
      <NavBar/>
      <ProductList/> 
      <Footer/>
    </>
  );
};
