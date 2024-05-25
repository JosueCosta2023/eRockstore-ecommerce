import React, { useContext } from "react";
import { Footer } from "../footer";
import { EmptyCart } from "../pageMessages";
import { ProductContext } from "../../context/productContext";
import { FaXmark } from "react-icons/fa6";
import './checkout.css'
import { NavBar } from '../navbar/NavBar'

export const CheckOut = () => {

    const { cart, removeFromCart, formatCurrency, handleInput, getCartSubTotal, geradorPdf } = useContext(ProductContext)

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
                                <button>Enviar no Whatsapp</button>
                                <button onClick={() => geradorPdf()}>Enviar no E-mail</button>
                                <button>Desistir da compra</button>
                            </div>
                        </div>}
                </div>
            </section>

            <Footer />
        </>
    )
}