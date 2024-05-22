import { AppRouter } from './Routers'
import {  ProductProvider } from './context/productContext'
import './index.css'

function App() {
  return (
    <ProductProvider>
      <AppRouter/>
    </ProductProvider>
  )
}

export default App
