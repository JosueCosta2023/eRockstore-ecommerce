import { useEffect, useState } from "react"


export const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        try {
            fetch('/public/db.json')
                .then((res) => res.json())
                .then(data => setProducts(data.products) )
            
        } catch (error) {
            console.error("Erro ao buscar dados json", error)
        }

    }, [])

    console.log(products)
    return(
        <>
            <div className="section-title">
                <h2>Produtos Selecionados</h2>
                <div className="underline"></div>
            </div>

            <div className="main-content">
                <div className="product-list">
                    {products && products.map((product, index) => (
                        <div key={index}>
                            <h1>{product.name}</h1>
                            <img src={product.image} alt="" />
                            <p>{product.rating}</p>
                        </div>
                    ))}
                </div>
            </div>  
        </>
    )
}