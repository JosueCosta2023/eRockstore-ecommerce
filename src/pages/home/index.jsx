import './home.css'
import { NavBar } from '../../components/navbar/NavBar'
import { Hero } from '../../components/hero'
import { ProductList } from '../../components/productList'

export const Home = () => {
    return (
        <>
            <header className="header-container">
                <NavBar />
                <Hero/>
            </header>
            <main>
                <ProductList/>
            </main>
            <footer></footer>
        </>
    )
}
