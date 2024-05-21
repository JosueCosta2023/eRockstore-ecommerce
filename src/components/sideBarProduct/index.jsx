import { FaXmark } from "react-icons/fa6"
import './sidebarproduct.css'

export const SideBarProducts = () => {


    return(
        <>
            <div className="sidebar-product">
                <div className="left-side">
                    <button className="remove-product-btn"><FaXmark/></button>
                    <div className="details">
                        <h4>DualSense PS5</h4>
                        <p>R$: 350,00</p>
                        <input type="number" min={1} max={100}/>
                        <p className="price-some">
                            <b>Soma: </b> R$: 350,00
                        </p>
                    </div>
                </div>

                <div className="right-side">
                    <img src="/images/products/product-3.png" alt="controle de plastation 5" />
                </div>
            </div>
        </>
    )
}