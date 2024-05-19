import { NavBar } from '../../components/navbar/NavBar'
import { Hero } from '../../components/hero'
import { ProductList } from '../../components/productList'
import { Exclusive } from '../../components/exclusive'
import './home.css'
import { Footer } from '../../components/footer'

export const Home = () => {
    return (
        <>
            <NavBar />
            <header className="header-container">
                <Hero />
            </header>
            <main>
                <ProductList />
                <Exclusive />
                <div className='page-inner-content'>
                    <div className="comments">
                        <div className="comment">
                            <p>"</p>
                            <p>Adquiri recentemente o smartwatch Xiaomi e estou extremamente satisfeito com a compra! A tela AMOLED é simplesmente incrível, com cores vibrantes e alta resolução, facilitando a leitura mesmo sob luz solar intensa.</p>
                            <p className='rate'>
                                &#x2605;&#x2605; &#x2605;&#x2605;&#x2605;
                            </p>
                            <p>Alex River</p>
                        </div>
                        <div className="comment">
                            <p>"</p>
                            <p>Adquiri recentemente o smartwatch Xiaomi e estou extremamente satisfeito com a compra! A tela AMOLED é simplesmente incrível, com cores vibrantes e alta resolução, facilitando a leitura mesmo sob luz solar intensa. </p>
                            <p className='rate'>
                                &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
                            </p>
                            <p>Alex River</p>
                        </div>
                        <div className="comment">
                            <p>"</p>
                            <p>Adquiri recentemente o smartwatch Xiaomi e estou extremamente satisfeito com a compra! A tela AMOLED é simplesmente incrível, com cores vibrantes e alta resolução, facilitando a leitura mesmo sob luz solar intensa. </p>
                            <p className='rate'>
                                &#x2605;&#x2605; &#x2605;&#x2605;&#x2605;
                            </p>
                            <p>Alex River</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
