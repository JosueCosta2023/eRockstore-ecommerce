import { FaChevronRight } from "react-icons/fa"
import './exclusive.css'
import { Link } from "react-router-dom"

export const Exclusive = () => {
    return (
        <div className="exclusive-section">
            <div className="page-inner-content">
                <div className="content">
                    <div className="left-side">
                        <h2>SmatWatch Xiaomi</h2>
                        <p>

                            O smartwatch Xiaomi é um dispositivo vestível elegante e funcional, projetado para atender às necessidades dos usuários modernos. Equipado com uma tela AMOLED de alta resolução, oferece visualizações nítidas e vibrantes, mesmo sob luz solar intensa. Sua bateria de longa duração pode chegar a até duas semanas de uso com uma única carga, garantindo que você fique conectado sem interrupções.
                        </p>
                        <Link to="/products/:id/details" className="see-more-details">
                            <span>Ver Detalhes</span>
                            <FaChevronRight />
                        </Link>
                    </div>
                    <div className="right-side">
                        <img src="/images/general/exclusive.png" alt="smartwatch" />
                    </div>
                </div>
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