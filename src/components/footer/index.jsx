import { Link } from "react-router-dom"
import './footer.css'


export const Footer = () => {
    return (
        <footer>
            <div className="content">

                <div className="logo-footer">
                    <h1 className="logo">
                        rocket
                        <span>Store</span>
                    </h1>
                    <p>
                        Nossa missão é proporcionar aos nossos clientes uma experiência de compra excepcional.
                    </p>
                </div>
                
                <div className="download-options">
                    <h3>Baixe a nossa aplicação</h3>
                    <p>Baixe nossa aplicação para android e IOS</p>
                    <div>
                        <img src="/images/general/app-store.png" alt="app store" />
                        <img src="/images/general/play-store.png" alt="play store" />
                    </div>
                </div>

                

                <div className="links">
                    <h3>Links Uteis</h3>
                    <ul>
                        <li><Link to="/about">Nossa Hitória</Link></li>
                        <li><Link to="/roles">Tone-se Parceiro</Link></li>
                        <li><Link to="/">Politicas e privacidade</Link></li>
                        <li><Link to="/">Trabalhe Conosco</Link></li>
                    </ul>
                </div>
            </div>
            <div className="content-base">
                <hr />
                <p className="copyright">Copyright 2024 - Josue Costa - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}