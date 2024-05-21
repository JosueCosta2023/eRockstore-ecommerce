import { AppRouter } from './Routers'
import { CartContext, CartProvider } from './context/cartContext'
import './index.css'

function App() {
  return (
    <CartProvider>
      <AppRouter/>
    </CartProvider>
  )
}

export default App
