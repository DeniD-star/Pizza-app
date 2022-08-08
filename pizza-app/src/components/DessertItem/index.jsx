import React from 'react';
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import * as orderService from '../../services/ordersService'
import * as pizzaService from '../../services/pizzaService'

const DessertItem = ({
    imageUrl,
    name,
    price,
    notes
}) => {


  const [quantity, setQuantity] = useState(1);
  const {user} = useContext(UserContext);
  const [orderList, setOrdersList] = useState([]);
  const [order, setOrder] = useState([]);
  const { dessertId } = useParams();
  let dessertPrice = price;
  const navigate = useNavigate();

  let isAdded = false;

  useEffect(()=>{
    pizzaService.getOne(dessertId).then((result) => {
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
  dessertPrice = price* quantity;

  const addOrderHandler = (e)=>{
    e.preventDefault()
    if(!user.email){
      navigate('/login')
    }
    orderService
    .addOrder(order._id, user.username, quantity,{
      imageUrl,
      name,
      price,
      notes
  })
   
    .then((result) => {
      if (result._id) {
        setOrdersList((currentOrders) => [...currentOrders, result]);
        console.log('order');
      }
      console.log(orderList)
    });
  isAdded = true;
   
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