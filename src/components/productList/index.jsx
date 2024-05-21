import { useEffect, useState } from "react"
import { FaMoneyBill } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"
import './product.css'
import { addProductToCart } from "../../service/services"



export const ProductList = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        try {
            fetch('/db.json')
                .then((res) => res.json())
                .then(data => setProducts(data.products))

        } catch (error) {
            console.error("Erro ao buscar dados json", error)
        }

    }, [])



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
                            <button className="btn-icon">
                                <Link to={`/products/${product.id}/checkout`}>
                                    <span>Comprar Agora</span>
                                    <FaMoneyBill />
                                </Link>
                            </button>

                            <button className="btn-icon add-to-cart-btn" onClick={() => addProductToCart(product)}>
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