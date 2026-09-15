import React from 'react'

const Cart = ({cart}) => {
  return (
    <div className='cart'>
    <h2>Cart</h2>
      <p>Total items: {cart.length}</p>

      {
        cart.map((item, index) => (
          <div className='cart-item' key={index}>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Cart