import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {

  const [cart, setCart] = useState([])

  const products = [
    {
      id: 1,
      name: "Mouse",
      price: 2500,
      image: "https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg"
    },
    {
      id: 2,
      name: "Laptop",
      price: 150000,
      image: "https://i.dell.com/is/image/DellContent/content/dam/images/products/laptops-and-2-in-1s/dell-laptop/db14250-non-touch/dell-db14250nt-laptop-c-22040rf115-bl-fpr.psd?wid=1200&hei=630&fmt=png-alpha"
    },
    {
      id: 3,
      name: "Keyboard",
      price: 5000,
      image: "https://media.wired.com/photos/6928c534e7dd69f52e08eeb0/master/w_1600%2Cc_limit/Tecware%2520Spectre75-2%2520source%2520henri%2520robbins.png"
    },
    {
      id: 4,
      name: "Headphones",
      price: 7000,
      image: "https://m1.com.pk/wp-content/uploads/2023/02/1-1.jpg"
    },
  ]

  function addToCart(product){
    setCart([
      ...cart, product
    ])
  }

  return (
    <div className='container'>
      <h1>My Store</h1>
      <ProductList products={products} addToCart={addToCart}/>

      <h2>Cart</h2>
      <p>Total items: {cart.length}</p>

      {
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App
