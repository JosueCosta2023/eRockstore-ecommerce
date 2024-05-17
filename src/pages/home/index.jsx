import './home.css'
import { NavBar } from '../../components/navbar/NavBar'

export const Home = () => {
    return (
        <>
            <header className="header-container">
                <NavBar />
            </header>
            <main>
                <h2>
                    This is Home
                </h2>
            </main>
            <footer></footer>
        </>
    )
}
