import { useContext, useState } from 'react'
import './exclusive.css'
import { useEffect } from 'react'
import { ProductContext } from '../../context/productContext'

export const Exclusive = () => {

    const { products } = useContext(ProductContext)
    const [currentyProduct, setCurrentProduct] = useState(0)


    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentProduct((prev) => (prev + 1) % products.length)
        }, 10000)

        return () => clearInterval(interval);

    }, [products.length])


    const product = products[currentyProduct]

    return (
        <div className="exclusive-section">
            <div className="page-inner-content">

                {products.length > 0 ? (
                    <div className="content">
                        <div className="left-side" >
                            <h2>{product.name}</h2>
                            <p>
                                {product.description}
                            </p>
                        </div>
                        <div className="right-side">
                            <img src={product.image} alt={product.name} />
                        </div>

                    </div>
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    )
}
export const PaceriaBanner = () => {
    return (
        <div className="exclusive-section">
            <div className="page-inner-content">
                <div className="content">
                    <div className="left-side">
                        <h2>A importancia das parcerias</h2>
                        <p>
                            Parceiros desempenham um papel fundamental no sucesso do comércio eletrônico, oferecendo uma rede de suporte e recursos que podem impulsionar o alcance, a credibilidade e a eficiência operacional de uma loja online. Desde fornecedores confiáveis que garantem a qualidade dos produtos até afiliados e influenciadores que ampliam a visibilidade da marca, os parceiros colaborativos são essenciais para expandir o alcance do público-alvo, melhorar a experiência do cliente e promover um crescimento sustentável no competitivo cenário do comércio eletrônico.
                        </p>
                    </div>
                    <div className="right-side">
                        <img src="/images/general/parceria.png" alt="Parcerias" />
                    </div>
                </div>
            </div>
        </div>
    )
}