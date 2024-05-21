import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './pages/home'
import { Products } from "./pages/product"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { CheckOut } from "./components/checkout"
import { ProductDetails } from "./components/productDetails"
import { Roles } from "./components/roles"



export const AppRouter = ({addProductToCart}) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/products" Component={Products}/>
                <Route path="/products/:id/checkout" Component={CheckOut}/>
                <Route path="/products/:id/details" Component={ProductDetails}/>
                <Route path="/about" Component={About}/>
                <Route path="/contact" Component={Contact}/>
                <Route path="/roles" Component={Roles}/>
            </Routes>
        </BrowserRouter>
    )
}