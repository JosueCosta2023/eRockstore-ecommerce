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

                            Descrição do Produto: Smartwatch Xiaomi
                            O smartwatch Xiaomi é um dispositivo vestível elegante e funcional, projetado para atender às necessidades dos usuários modernos. Equipado com uma tela AMOLED de alta resolução, oferece visualizações nítidas e vibrantes, mesmo sob luz solar intensa. Sua bateria de longa duração pode chegar a até duas semanas de uso com uma única carga, garantindo que você fique conectado sem interrupções.
                        </p>
                        <Link to="/products/:id/details" className="see-more-details">
                            <span>Ver Detalhes</span>
                            <FaChevronRight />
                        </Link>
                    </div>
                    <div className="right-side">
                        <img src="/images/general/exclusive.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}