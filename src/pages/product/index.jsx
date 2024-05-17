import { NavBar } from "../../components/navbar/NavBar";
import { ProductList } from "../../components/productList";
import "./products.css";
import React from "react";


export const Products = () => {
  return (
    <>
      <NavBar/>
      <div className="page-inner-content">
        <ProductList/>
      </div>  
    </>
  );
};
