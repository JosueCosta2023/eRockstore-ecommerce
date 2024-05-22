import { FaCartPlus, FaMoneyBill } from 'react-icons/fa6'
import './empty.css'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return(
        <section>
            <img src="/images/general/error.png" alt="" />
            <h2>Página em Desenvolvimento...</h2>
        </section>
    )
}

export const EmptyCart = () => {
    return(
        <section>
            <h2>Meu carrinho</h2>
            <FaCartPlus/>
            <i>Seu carrinho está vazio</i>
            <p>Navegue pela loja e adicione seus produtos.</p>
           
                <Link to={'/products'}>
                    <span>Ver Produtos</span>
                    <FaMoneyBill/> 
                </Link>  
        </section>
    )
}