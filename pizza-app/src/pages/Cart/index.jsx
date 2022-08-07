import React from "react";
import "./index.css";
import {useNavigate} from 'react-router-dom';
import CartOrderItem from "./CartOrderItem";

const Cart = (orders) => {
  const navigate = useNavigate();
  const successfulOrderHandler = (e)=>{
    e.preventDefault()
    navigate('/successfulOrder')
  }
  const cancelOrders = (e)=>{
    e.preventDefault()
    navigate('/cart')
  }
  return (
    <section className="cart">
      <h1 className="cart-page-heading">PIZZERIA</h1>
      <article className="cart-article">
        <h2 className="cart-article-heading">CART</h2>
        <article className="cart-info-article">
          <ul className="cart-list">
          {orders.length> 0 && orders.map((dessert) => (
          <li key={dessert.id}>
            <CartOrderItem
              imageUrl={dessert.imageUrl}
              name={dessert.name}
              notes={dessert.notes}
              price={dessert.price}
            />
          </li>
        ))}
           
          </ul>
          <p className="total-price">Total Price: 4.50{orders.totalPrice}$</p>
        </article>
      </article>

      <article className="btns-order">
        <button className="cancel-order" onClick={cancelOrders}>Cancel the order</button>
        <button className="place-order" onClick={successfulOrderHandler}>Place the order</button>
      </article>

      <article className="no-orders">
        <p>No orders at the moment!</p>
      </article>
    </section>
  );
};

export default Cart;
