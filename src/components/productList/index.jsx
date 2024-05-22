import { useContext } from "react"
import { FaMoneyBill } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"
import './product.css'
import { ProductContext } from "../../context/productContext"




export const ProductList = () => {

    const {products,  addToCart, cart} = useContext(ProductContext)


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
                        <p className="price"><span>R$:</span> {product.price}  </p>

                        <div className="buttons">
                            { cart.length === 0 ? <></> : 
                                <button className="btn-icon">
                                    <Link to={`/products/checkout`}>
                                        <span>Enviar Pedido</span>
                                        <FaMoneyBill />
                                    </Link>
                                </button>
                        
                            }

                            <button className="btn-icon add-to-cart-btn" onClick={() => addToCart(product)}>
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