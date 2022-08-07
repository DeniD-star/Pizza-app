import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router";

const DessertItem = ({
    imageUrl,
    name,
    price,
    notes
}) => {


  const [quantity, setQuantity] = useState(1);
  let dessertPrice = price;
  const navigate = useNavigate();

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((quantity) => quantity - 1);
  };
  dessertPrice = price* quantity;

  const addOrderHandler = (e)=>{
    e.preventDefault()
   
  }
  return (
    <article className="dessert-article">
        <article className="img-dessert">
            <img src={imageUrl} alt="dessert-img" className="dessert-img"/>
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
        <article className="info-dessert">
            <h4 className="dessert-price">{dessertPrice} $</h4>
            <h3 className="dessert-name">{name}</h3>
            <p className="description">{notes}</p>
            <button className="add-dessert" onClick={addOrderHandler}>ADD</button>
        </article>
      </article>
  )
}

export default DessertItem;