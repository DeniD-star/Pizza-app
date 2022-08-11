import React from 'react';
import './index.css';

const CartOrderItem = ({order}) => {
  console.log(order);
  let priceItem = Number(order.item.price * order.quantity);
  return (
    <li className="cart-item">
              <article className="quantity-items">
                <p className="counter-item">{order.quantity}</p>
                <p className="name-item">{order.item.name}</p>
              </article>
              <article className="price-item">
                <p className="price-item">{priceItem.toFixed(2)}$</p>
              </article>
            </li>
  )
}

export default CartOrderItem