import jsPDF from "jspdf";
import { createContext, useEffect, useState } from "react";
import 'jspdf-autotable';


export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {

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

    setCart(prevCart => {
      const produtoExistente = prevCart.find(item => item.id === product.id);

      if (produtoExistente) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })


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
    if (quantity < 1) {
      quantity = 1;
    }
    updateQuantity(productId, parseInt(quantity, 10))
  }

  const formatCurrency = (price) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price.toFixed(2))
  }

  const updateQuantity = (productId, quantity) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ))
  }

  const geradorPdf = ({cart}) => {
    const documento = new jsPDF()

    // Informações da Empresa
    const companyName = "Informática Brasil Ltda";
    const companyAddress = "Av, amazonas, 5269w\n Santos, São Paulo, 524861-00";
    const companyContact = "Telefone: (11) 8654-7820\nEmail: infoBrazil@comercial.net.br";
    

    // Informações do Cliente
    const clientName = "Beltrano da Silva";
    const clientAddress = "Endereço do Cliente\nCidade, Estado, CEP";

    // Título
    const title = "Seu Pedido";
    const pageWidth = documento.internal.pageSize.getWidth();
    const textWidth = documento.getTextWidth(title);
    const textX = (pageWidth - textWidth) / 2;

     // Adicionar cabeçalho da empresa
     documento.setFontSize(12);
     documento.text(companyName, 20, 20);
     documento.text(companyAddress, 20, 30);
     documento.text(companyContact, 20, 45);
 
     // Adicionar título
     documento.setFontSize(18);
     documento.text(title, textX, 65);
 
     // Adicionar informações do cliente
     documento.setFontSize(12);
     documento.text("Cliente:", 20, 80);
     documento.text(clientName, 20, 85);
     documento.text(clientAddress, 20, 95);

     // Definir dados da tabela

     const items = [
      ["Descrição", "Quantidade", "Preço Unitário", "SubTotal Item"],
    ];

    cart.forEach(item => {
      const precoTotal = item.quantity * item.price
      items.push([
        item.name,
        item.quantity,
        `${formatCurrency(item.price)}`,
        `${formatCurrency(precoTotal)}`
      ])
    })


    // Adicionar tabela
    documento.autoTable({
      startY: 110,
      head: [items[0]],
      body: items.slice(1),
    });

    documento.setFontSize(12);
    documento.text(`Total: ${formatCurrency(getCartSubTotal())}`, 20, documento.autoTable.previous.finalY + 10);

    // Adicionar observações ou termos
    const terms = "Este orçamento é válido por 7 dias.\nApós o vencimento os preços podem sofrer alterações.";
    documento.text(terms, 20, documento.autoTable.previous.finalY + 30);

    // Salvar PDF
    const DataAtual = Date.now();
    documento.save(`${DataAtual}-orcamento.pdf`);

    clearCart({cart})
  
  }

  const clearCart = ({cart}) => {
    setCart([])
  }


  return (
    <ProductContext.Provider value={{ products, geradorPdf, cart, valueCart, addToCart, removeFromCart, handleCheckout, formatCurrency, updateQuantity, getCartSubTotal, handleInput, clearCart }}>
      {children}
    </ProductContext.Provider>
  )

}