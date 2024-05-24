import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext();
 

export const ProductProvider = ({children}) => {
    // const [cartItems, setCartItems] = useState([])

    // const addToCart = (product) => {
    //     const existingProduct = cartItems.find(item => item.id === product.id);
    //     if (existingProduct) {
    //       setCartItems(cartItems.map(item => 
    //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    //       ));
    //     } else {
    //       setCartItems([...cartItems, { ...product, quantity: 1 }]);
    //     }
        
    // }

    
    // const removeFromCart = (productId) => {
    //     const existingProduct = cartItems.find(item => item.id === productId);
    //     if (existingProduct.quantity === 1) {
    //       setCartItems(cartItems.filter(item => item.id !== productId));
    //     } else {
    //       setCartItems(cartItems.map(item => 
    //         item.id === productId ? { ...item, quantity: item.quantity - item.quantity  } : item
    //       ));
    //     }
    // }

    // const updateQuantity = (productId, quantity) => {
    //   setCartItems(
    //     cartItems.map(item => 
    //       item.id === productId ? {...item, quantity: quantity} : item
    //     )
    //   )
    //   console.log(cartItems)
    // }
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [valueCart, setValueCart] = useState([])

    useEffect(() => {
      try {
          fetch('/db.json')
              .then((res) => res.json())
              .then(data => setProducts(data.products))

      } catch (error) {
          console.error("Erro ao buscar dados json", error)
      }

  }, [])

    const addToCart = (product) => {
        setCart([...cart, {...product, quantity: 1}])
    }


    const getCartSubTotal = () => {
      return cart.reduce((total, product) => total + product.price * product.quantity, 0)
    }

    const removeFromCart = (productId) => {
      setCart(cart.filter(product => product.id !== productId))
    }

    const handleCheckout = () => {
      alert("Compra Finalizada")
      setCart([])
    }

    const handleInput = (productId, quantity) => {
      if(quantity < 1){
       quantity = 1;
      }
      updateQuantity(productId, parseInt(quantity, 10))
   }

    const formatCurrency = (price) => {
      return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price)
    }

    const updateQuantity = (productId, quantity) => {
      setCart(cart.map(item => 
        item.id === productId ? { ...item, quantity} : item
      ))
    }


    return(
        <ProductContext.Provider value={{products, cart, valueCart, addToCart, removeFromCart, handleCheckout, formatCurrency, updateQuantity, getCartSubTotal, handleInput}}>
            {children}
        </ProductContext.Provider>
    )

}