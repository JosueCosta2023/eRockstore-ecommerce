import './home.css'
import { NavBar } from '../../components/navbar/NavBar'
import { Hero } from '../../components/hero'

export const Home = () => {
    return (
        <>
            <header className="header-container">
                <NavBar />
                <Hero/>
            </header>
            <main>
            </main>
            <footer></footer>
        </>
    )
}
