import { useContext } from "react"
import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"
import './product.css'
import { ProductContext } from "../../context/productContext"
import { BsSendPlus } from "react-icons/bs"




export const ProductList = () => {

    const {products,  addToCart, cart, formatCurrency} = useContext(ProductContext)

    return (
        <div className="page-inner-content">
            <div className="section-title">
                <h2>Nossos Produtos</h2>
                <div className="underline"></div>
            </div>


            <div className="product-list">
                {products && products.map((product) => (
                    <div key={product.id} className="product">
                        
                        <img src={product.image} alt={product.name} />
                        <p className="name">{product.name}</p>
                        <p className="rate">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</p>
                        <p className="price"><span></span> {formatCurrency(product.price)}  </p>

                        <i>Imagens Meramente Ilustrativas</i>
                        <div className="buttons">
                            { cart.length === 0 ? <></> : 
                                <button className="btn-icon">
                                    <Link to={`/products/checkout`}>
                                        <span>Enviar Pedido</span>
                                        <BsSendPlus/>
                                    </Link>
                                </button>
                        
                            }

                            <button className="btn-icon add-to-cart-btn" onClick={() => addToCart(product, product.id)}>
                                <span>Adicionar ao Carrinho</span>
                                <FaCartShopping />
                            </button>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}