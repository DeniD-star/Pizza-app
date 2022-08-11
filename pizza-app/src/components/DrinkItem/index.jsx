import React from "react";
import './index.css';
import { useState } from "react";
import {useParams, useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
//import * as orderService from '../../services/ordersService'
import * as pizzaService from '../../services/pizzaService'
import { useEffect } from "react";
import * as cartService from '../../services/cartService'


const DrinkItem = ({ drink }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartList, setCartList] = useState([]);
  const [order, setOrder] = useState([]);
  const[isAdded, setIsAdded] = useState(false);
  const {user} = useContext(UserContext);
  const { drinkId } = useParams();
  const navigate = useNavigate();
  let drinkPrice = drink.price;
  


  useEffect(()=>{
    pizzaService.getOne(drinkId).then((result) => {
      if (result) {
        console.log(result._id);
        setOrder(result);
        console.log(result);
      }
    });
  }, [])

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((quantity) => quantity - 1);
  };
  drinkPrice = drink.price* quantity;

  const addToTheCartHandler = (e)=>{
    e.preventDefault();
    if(!user.email){
      navigate('/login')
    }
    cartService
    .addToTheCart(drink._id, user.username, quantity, drink)
   
    .then((result) => {
      if (result._id) {
        setCartList((currentOrders) => [...currentOrders, result]);
        console.log('order');
        setIsAdded(true);
      }
      console.log(cartList)
    });
 
   
  }

  isAdded && setTimeout(()=>{
    setIsAdded(false)
  }, 5000)

  return (
    <article className="drink-article drink">
      <article className="img-drink">
        <img
          src={drink.imageUrl}
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
        <h4 className="drink-price">{drinkPrice.toFixed(2)} $</h4>
        <h3 className="drink-name">{drink.name}</h3>
        <p className="description">{drink.notes}</p>
        <button className="add-drink" onClick={addToTheCartHandler}>ADD</button>
       {isAdded && <p className="drinkP">{drink.name} added to the cart!</p>}
      </article>
    </article>
  );
};

export default DrinkItem;
