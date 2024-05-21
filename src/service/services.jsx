import { SideBarCart } from "../components/sideBar"

export const addProductToCart = (product) => {
    try {   
        (<SideBarCart product={product} />)
    } catch (error) {
        console.error("Erro ao buscar produtos", error)
    }
}