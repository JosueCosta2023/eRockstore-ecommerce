import { createContext, useState } from "react";


export const CartContext = createContext();

export const formatCurrency = (price) => {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price)
}

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
          setCartItems(cartItems.map(item => 
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ));
        } else {
          setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
        
    }

    
    const removeFromCart = (productId) => {
        // setCartItems(cartItems.filter(item => item.id !== productId))
        const existingProduct = cartItems.find(item => item.id === productId);
        if (existingProduct.quantity === 1) {
          setCartItems(cartItems.filter(item => item.id !== productId));
        } else {
          setCartItems(cartItems.map(item => 
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
          ));
        }
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart, formatCurrency, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )

}