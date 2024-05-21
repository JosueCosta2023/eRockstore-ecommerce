
export const addProductToCart = (product) => {
    try {
        const data =  product    
        console.log(data) 
    } catch (error) {
        console.error("Erro ao buscar produtos", error)
    }
}