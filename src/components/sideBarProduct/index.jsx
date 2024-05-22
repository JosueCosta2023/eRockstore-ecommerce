import { FaXmark } from "react-icons/fa6"
import './sidebarproduct.css'
import { ProductContext } from "../../context/productContext"
import { useContext } from "react"

export const SideBarProducts = () => {

    const { cart, removeFromCart, formatCurrency} = useContext(ProductContext)


    const handleInput = (id) => {
        
    }
    
    return(
        <>
        {
            cart.map((product) => (
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
                                value={product.quantity}
                                onChange={(e) => {
                                    handleInput(product.id)
                                }}
                            />
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