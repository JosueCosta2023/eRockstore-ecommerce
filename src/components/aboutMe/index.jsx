import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import './about.css'
import { Link } from 'react-router-dom'


export const AboutMe = () => {
    return(
        <>
            <section className="inner-page-container">
                <div className="content">
                    <h2>Nossa História</h2>
                    <strong>Bem-vindo à RocketStore</strong>

                    <p>Na RocketStore, somos apaixonados por tecnologia e jogos. Nossa missão é fornecer aos gamers de todos os níveis as ferramentas e equipamentos de que precisam para alcançar a melhor performance em seus jogos favoritos.</p>

                    <h3>Quem Somos</h3>
                    <p>Fundada em 2007, a RocketStore nasceu do desejo de criar uma plataforma dedicada aos entusiastas de jogos e tecnologia. Somos uma equipe de gamers, engenheiros e especialistas em informática que entende a importância de um equipamento de qualidade. Desde os jogos de estratégia até os de ação, sabemos que cada detalhe faz a diferença.</p>

                    <h3>Nossa Missão</h3>
                    <p>
                    Nosso objetivo é ser a principal fonte de produtos de informática para gamers no mercado. Oferecemos uma vasta gama de produtos, desde os componentes de hardware mais recentes até acessórios que aprimoram a experiência de jogo. Nossa missão é:
                    </p>
                    <ul>
                        <li>
                            <span>Qualidade:</span> 
                            Garantir que cada produto oferecido em nossa loja atenda aos mais altos padrões de qualidade e desempenho.
                        </li>
                        <li>
                            <span>Inovação:</span> 
                            Manter-nos atualizados com as últimas inovações e tecnologias no mundo dos games.
                        </li>
                        <li>
                            <span>Satisfação do Cliente:</span> 
                            Proporcionar um atendimento ao cliente excepcional, com suporte especializado e uma experiência de compra sem complicações.
                        </li>
                    </ul>

                    <h3>O que Oferecemos</h3>
                    <ul>
                        <li>
                            <span>Hardware:</span>
                            Placas de vídeo, processadores, memórias RAM, e muito mais.
                        </li>
                        <li>
                            <span>Periféricos:</span>
                            Teclados, mouses, headsets e outros acessórios de alta performance.
                        </li>
                        <li>
                            <span>Acessórios:</span>
                            Cadeiras gamer, monitores, e tudo o que você precisa para completar seu setup.
                        </li>
                        <li>
                            <span>Serviços:</span>
                            Montagem de PCs personalizados e consultoria técnica.
                        </li>
                    </ul>

                    <h3>Por que escolher a RocketStore?</h3>
                    <ul>
                        <li>
                            <span>Experiência e Paixão:</span>
                            Nossa equipe vive e respira tecnologia e jogos. Sabemos do que você precisa porque também somos gamers.
                        </li>
                        <li>
                            <span>Suporte Especializado:</span>
                            Estamos sempre prontos para ajudar, seja para escolher o melhor produto ou para resolver qualquer dúvida técnica.
                        </li>
                        <li>
                            <span>Compra Segura:</span>
                            Oferecemos diversas opções de pagamento seguro e uma política de devolução sem complicações para garantir sua tranquilidade.
                        </li>
                    </ul>

                    <h3>Junte-se à Nossa Comunidade</h3>
                    <div className='content-inner'>
                        <div className='left-us'>
                            <p>
                            Na RocketStore, acreditamos na força da comunidade gamer. Siga-nos nas redes sociais para ficar por dentro das últimas novidades, lançamentos de produtos e promoções exclusivas. Participe dos nossos eventos e torneios, e conecte-se com outros gamers que compartilham a mesma paixão.
                            </p>
                            <p>
                            Obrigado por escolher a RocketStore. Estamos empolgados para ser parte da sua jornada no mundo dos games!
                            </p>
                        </div>

                        <div className='right-us'>
                            <div>
                                <Link to={'/'}>
                                    <FaFacebook/>
                                </Link>

                                <Link to={'/'}>
                                    <FaInstagram/>
                                </Link>

                                <Link to={'/'}>
                                    <FaTwitter/>
                                </Link>

                                <Link to={'/'}>
                                    <FaWhatsapp/>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}