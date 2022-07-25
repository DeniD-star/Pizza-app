import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


const Details = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity => quantity + 1);
  }


  const decreaseQuantity = () => {
    setQuantity(quantity => quantity - 1);
    
}
  return (
    <section className="details-page">
  <article className="details-page-article-header">
    <img src={require("./images/margherita-pizza.jpg")} alt="img" className="details-img" />
    <h2 className="details-pizza-name">PIZZA NAME</h2>
  </article>
  <article className="other-info">
    <article className="details-ingredients">
      <h2 className="ingredients-h2">INGREDIENTS</h2>
      <p className="ingredients-description">DESCRIPTION PIZZA INGREDIENTS</p>
    </article>
    <article className="details-quantity">
      <h2 className="details-quantity-header">QUANTITY</h2>
      <article>
        <button className="decrease" onClick={decreaseQuantity}>
          -
        </button>
        <h2 className="quantity-heading">
          {quantity}
        </h2>
        <button className="increase" onClick={increaseQuantity}>
          +
        </button>
      </article>
    </article>
    <article className="details-notes">
      <h2 className="notes-h2">NOTES</h2>
      <p className="notes-description">DESCRIPTION NOTES</p>
    </article>
  </article>
  <article className="details-order">
    <h2 className="details-price-order">7.00$</h2>
    <button className="details-btn-order">ADD TO THE ORDER</button>
  </article>
  <article className="details-btns-admin">
      <Link to="/edit/:pizzaId" className="details-btn-edit">EDIT</Link>
      <Link to="/delete/:pizzaId" className="details-btn-delete">DELETE</Link>
   
  </article>
</section>

  )
}

export default Details;