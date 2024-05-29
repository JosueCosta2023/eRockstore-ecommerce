import {  FaXmark } from "react-icons/fa6"
import './sidebar.css'
import { Link } from "react-router-dom"
import { SideBarProducts } from "../sideBarProduct"
import { useContext } from "react"
import { ProductContext } from "../../context/productContext"
import { BsSendPlus } from "react-icons/bs"



export const SideBarCart = ({ setShowCart }) => {

    const {  cart, getCartSubTotal, formatCurrency } = useContext(ProductContext)

    return (

        <aside className="sidebar-cart">
            <div className="top">
                <h3>Meu Carrinho</h3>
                <button onClick={() => setShowCart(false)}>
                    <FaXmark />
                </button>
            </div>

            {
                cart.length === 0 ? <i>Seu carrinho está vazio.</i> : 
                <>
                    <div className="sidebar-products-list">
                        <SideBarProducts/>
                    </div>

                    <div className="total-container">
                        <b>Total:</b> {formatCurrency(getCartSubTotal())}
                    </div>

                    <Link to="/products/checkout" className="btn-icon">
                        <span>Enviar Pedido</span>
                        <BsSendPlus/>
                    </Link>
                </>
            }



        </aside>
    )
}