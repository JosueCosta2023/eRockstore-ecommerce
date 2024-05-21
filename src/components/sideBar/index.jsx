import { FaMoneyBill, FaXmark } from "react-icons/fa6"
import './sidebar.css'
import { Link } from "react-router-dom"
import { SideBarProducts } from "../sideBarProduct"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"



export const SideBarCart = ({ setShowCart }) => {

    const { cartItems } = useContext(CartContext)


    return (

        <aside className="sidebar-cart">
            <div className="top">
                <h3>Seu Carrinho</h3>
                <button onClick={() => setShowCart(false)}>
                    <FaXmark />
                </button>
            </div>

            {
                cartItems.length === 0 ? <i>Seu carrinho está vazio.</i> : 
                <>
                    <div className="sidebar-products-list">
                        <SideBarProducts/>
                    </div>

                    <div className="total-container">
                        <b>Total:</b> R$: 000
                    </div>

                    <Link to="/products/:id/checkout" className="btn-icon">
                        <span>Enviar Pedido</span>
                        <FaMoneyBill/>
                    </Link>
                </>
            }



        </aside>
    )
}