import React from 'react';
import './index.css';

const CartOrderItem = (props) => {
  return (
    <li className="cart-item">
              <article className="quantity-items">
                <p className="counter-item">1{props.count}</p>
                <p className="name-item">Margherita{props.name}</p>
              </article>
              <article className="price-item">
                <p className="price-item">4.50{props.price}$</p>
              </article>
            </li>
  )
}

export default CartOrderItem