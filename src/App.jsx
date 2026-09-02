import './App.css'

function App() {

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

  return (
    <div className='container'>
      <h1>My Store</h1>
      <div className='product-list'>
        {
          products.map((product)=> (
            <div className='product-card' key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
