import React from "react";
import "./index.css";

const Cart = (props) => {
  return (
    <section className="cart">
      <h1 className="cart-page-heading">PIZZERIA</h1>
      <article className="cart-article">
        <h2 className="cart-article-heading">CART</h2>
        <article className="cart-info-article">
          <ul className="cart-list">
            <li className="cart-item">
              <article className="quantity-items">
                <p className="counter-item">1{props.count}</p>
                <p className="name-item">Margherita{props.name}</p>
              </article>
              <article className="price-item">
                <p className="price-item">4.50{props.price}$</p>
              </article>
            </li>
          </ul>
          <p className="total-price">Total Price: 4.50{props.totalPrice}$</p>
        </article>
      </article>

      <article className="btns-order">
        <button className="cancel-order">Cancel the order</button>
        <button className="place-order">Place the order</button>
      </article>

      <article className="no-orders">
        <p>No orders at the moment!</p>
      </article>
    </section>
  );
};

export default Cart;
