import React, { useContext, useState } from "react";
import { Footer } from "../footer";
import { EmptyCart } from "../pageMessages";
import { ProductContext } from "../../context/productContext";
import { FaFilePdf, FaXmark } from "react-icons/fa6";
import './checkout.css'
import { NavBar } from '../navbar/NavBar'
import { Link } from "react-router-dom";
import { FaTrash, FaWhatsapp } from "react-icons/fa";

export const CheckOut = () => {

    const { cart, removeFromCart, formatCurrency, handleInput, getCartSubTotal, geradorPdf, clearCart } = useContext(ProductContext)
    const [safe, setSafe] = useState()

    return (
        <>
            <NavBar />

            <section className="page-inner-container">
                <div className="content">
                    {cart.length === 0 ? <EmptyCart /> :
                        <div>
                            {
                                cart.map((product) => (
                                    <div className="sidebar-product" key={product.id}>
                                        <div className="left-side">

                                            <button className="remove-product-btn" onClick={() => removeFromCart(product.id)}><FaXmark /></button>


                                            <div className="details">
                                                <h4>{product.name}</h4>
                                                <span>Soma: {formatCurrency(product.price * product.quantity)}</span>
                                                <p>{formatCurrency(product.price)}</p>
                                                <input
                                                    type="number"
                                                    min={1}
                                                    max={100}
                                                    value={product.quantity}
                                                    onChange={(e) => handleInput(product.id, e.target.value)}
                                                />

                                               
                                            </div>
                                        </div>

                                        <div className="right-side">
                                            <img src={product.image} alt="controle de plastation 5" />
                                        </div>
                                    </div>

                                ))
                            }

                            <p>Valor total: {formatCurrency(getCartSubTotal())}</p>
                            <div className="content-buttons">
                                <button className="btn-checkout">
                                    Enviar no Whatsapp 
                                    <FaWhatsapp/> 
                                </button>


                                <button className="btn-checkout" onClick={() => geradorPdf({cart})}>
                                    Gerar PDF 
                                    <FaFilePdf/> 
                                </button>

                                <Link className="btn-checkout" onClick={() => clearCart({cart})} to='/'>
                                    <span>Zerar Carrinho</span>
                                    <FaTrash/>
                                </Link>
                            </div>
                        </div>}
                </div>
            </section>

            <Footer />
        </>
    )
}