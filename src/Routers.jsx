import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './pages/home'
import { Products } from "./pages/product"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"



export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/products" Component={Products}/>
                <Route path="/about" Component={About}/>
                <Route path="/contact" Component={Contact}/>
            </Routes>
        </BrowserRouter>
    )
}