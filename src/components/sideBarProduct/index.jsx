import { FaXmark } from "react-icons/fa6"
import './sidebarproduct.css'
import { CartContext } from "../../context/cartContext"
import { useContext } from "react"



export const SideBarProducts = () => {

    const {cartItems, formatCurrency, removeFromCart} = useContext(CartContext)

    return(
        <>
        {
            cartItems.map((product) => (
                <div className="sidebar-product" key={product.id}>
                    <div className="left-side">
                        <button className="remove-product-btn" onClick={() => removeFromCart(product.id)}><FaXmark/></button>
                        <div className="details">
                            <h4>{product.name}</h4>
                            <p>{formatCurrency(product.price)}</p>
                            <input 
                                type="number" 
                                min={1} 
                                max={100}
                                value={product.length}
                                
                            />
                            <p className="price-some">
                                <b>Soma: </b>{formatCurrency(product.price)}
                            </p>
                        </div>
                    </div>

                    <div className="right-side">
                        <img src={product.image} alt="controle de plastation 5" />
                    </div>
                </div>

            ))
        }
        </>
    )
}