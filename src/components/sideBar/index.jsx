import { FaMoneyBill, FaXmark } from "react-icons/fa6"
import './sidebar.css'
import { Link } from "react-router-dom"
import { SideBarProducts } from "../sideBarProduct"


export const SideBarCart = ({setShowCart}) => {

    

    return(
        <aside className="sidebar-cart">
            <div className="top">
                <h3>Seu Carrinho</h3>
                <button onClick={() => setShowCart(false)}>
                    <FaXmark/>
                </button>
            </div>

            <div className="sidebar-products-list">
                <SideBarProducts/>
                <SideBarProducts/>
                <SideBarProducts/>
            </div>

            <div className="total-container">
                <b>Total:</b> R$: 5000
            </div>

            <Link to="/products/:id/checkout" className="btn-icon">
                <span>Pagar Agora</span>
                <FaMoneyBill/>
            </Link>

            <i>Seu carrinho está vazio.</i>
        </aside>
    )
}