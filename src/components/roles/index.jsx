import { Link } from "react-router-dom"
import { Footer } from "../footer"
import { NavBar } from "../navbar/NavBar"
import './roles.css'
import { FaChevronRight } from "react-icons/fa"
import { PaceriaBanner } from "../exclusive"


export const Roles = () => {
    return (
        <>
            <NavBar />
            <PaceriaBanner/>
            <div className="roles-container">
                <h2>Regras e Condições</h2>
                <div className="underline"></div>

                <ol className="itens-roles">
                    <div className="item">
                        <li>Cadastro de parceiros</li>
                        <ul>
                            <li>Todos os interessados em se tornarem parceiros devem preencher o formulário de inscrição disponível em nosso site.</li>
                            <li>O formulário deve ser preenchido com informações precisas e atualizadas sobre a empresa interessada em se tornar parceira.</li>
                        </ul>
                    </div>


                    <div className="item">
                        <li>Critérios de Seleção</li>
                        <ul>
                            <li>Avaliaremos cuidadosamente todas as inscrições de parceiros em potencial com base em critérios como qualidade do produto/serviço, reputação da empresa, compatibilidade com nossa marca e público-alvo, entre outros.</li>
                        </ul>
                    </div>

                    <div className="item">
                        <li>
                        Aprovação e Notificação
                        </li>
                        <ul>
                            <li>Uma vez revisadas, entraremos em contato com os candidatos aprovados para discutir os detalhes da parceria.</li>
                            <li>Reservamo-nos o direito de recusar qualquer inscrição que não atenda aos nossos critérios de seleção.</li>
                        </ul>
                    </div>


                    <div className="item">
                        <li>
                        Termos da Parceria
                        </li>
                        <ul>
                            <li>Os termos específicos da parceria, incluindo comissões, prazos, responsabilidades e outros detalhes, serão acordados por meio de um contrato formal entre as partes.</li>
                           
                        </ul>
                    </div>

                    <div className="item">
                        <li>
                            Integridade do Conteúdo e Marca
                        </li>
                        <ul>
                            <li>Os parceiros devem manter a integridade da nossa marca e imagem em todos os materiais promocionais e de marketing relacionados à parceria.</li>
                            <li>Qualquer conteúdo ou prática que possa prejudicar a reputação da nossa marca é estritamente proibido.</li>
                        </ul>
                    </div>

                    <div className="item">
                        <li>
                            Comissões e Pagamentos
                        </li>
                        <ul>
                            <li>As comissões e os métodos de pagamento serão especificados no contrato de parceria.</li>
                            <li>Os pagamentos serão processados de acordo com os termos acordados, geralmente em uma base mensal ou trimestral.</li>
                        </ul>
                    </div>


                    <div className="item">
                        <li>
                            Duração da Parceria:
                        </li>
                        <ul>
                            <li>A duração da parceria será especificada no contrato e pode ser revisada ou renovada conforme necessário, sujeita a ambas as partes concordarem.</li>
                            
                        </ul>
                    </div>

                    <div className="item">
                        <li>
                        Rescisão da Parceria
                        </li>
                        <ul>
                            <li>Qualquer das partes tem o direito de rescindir a parceria mediante aviso prévio por escrito, conforme estipulado no contrato.</li>
                            
                        </ul>
                    </div>


                    <div className="item">
                        <li>
                        Alterações nos Termos e Condições
                        </li>
                        <ul>
                            <li>Reservamo-nos o direito de fazer alterações nestes termos e condições a qualquer momento, mediante aviso prévio aos parceiros afetados.</li>
                            
                        </ul>
                    </div>

                    <div className="item">
                        <li>
                        Conformidade com as Leis e Regulamentos
                        </li>
                        <ul>
                            <li>Os parceiros devem cumprir todas as leis e regulamentos aplicáveis relacionados às suas operações comerciais e à parceria conosco.</li>
                            
                        </ul>
                    </div>
                </ol>
                <h3>Ao se inscrever como parceiro, você concorda em cumprir todas as regras e condições estabelecidas acima. Para mais informações, entre em contato conosco.</h3>
                <Link to="/contact">
                    <span>Preencher Formulario</span>
                    <FaChevronRight/>
                </Link>
            </div>
            <Footer />
        </>
    )
}