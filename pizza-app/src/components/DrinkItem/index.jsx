import React from "react";
import './index.css';
import { useState } from "react";

const DrinkItem = ({ imageUrl, name, price, notes }) => {
  const [quantity, setQuantity] = useState(1);
  let drinkPrice = price;

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((quantity) => quantity - 1);
  };
  drinkPrice = price* quantity;

  return (
    <article className="drink-article drink">
      <article className="img-drink">
        <img
          src={imageUrl}
          alt="drink-img"
          className="drink-dessert-img"
        />
      </article>
      <div className="btns-quantity">
          <button className="decrease" onClick={decreaseQuantity}>
            -
          </button>
          <h2 className="quantity-heading">{quantity}</h2>
          <button className="increase" onClick={increaseQuantity}>
            +
          </button>
        </div>
      <article className="info-drink">
        <h4 className="drink-price">{drinkPrice} $</h4>
        <h3 className="drink-name">{name}</h3>
        <p className="description">{notes}</p>
        <button className="add-drink">ADD</button>
      
      </article>
    </article>
  );
};

export default DrinkItem;
