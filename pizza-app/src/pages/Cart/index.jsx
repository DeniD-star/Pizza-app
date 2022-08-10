import React, { useState, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import CartOrderItem from "./CartOrderItem";
import * as cartService from "../../services/cartService";
import * as orderService from "../../services/ordersService";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
//import { PizzaContext } from "../../context/PizzaContext";
import { useParams } from "react-router";
import uniqId from 'uniqid';

const Cart = () => {
  // const [currItem, setCurrItem] = useState({});//item that will create in cart
   const [currentOrderId, setCurrentOrderId] = useState([]);//orderId that will create in orders
  const [cartList, setCartList] = useState([]);//cartList array 
  const [orderList, setOrdersList] = useState([]);//ordersList array
 
let totalPrice = 0;
  
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {

    // cartService.getItemById(itemId).then((result) => {
    //   console.log(orderId);
    //   if (result) {
    //     setCurrItem(result);
    //     console.log(result)
       
    //   }
    // });
    cartService.getAllOrders().then((res) => {
      if (res.length > 0) {
        setCartList(res);
        console.log(res);//array with all orders in the cart
      }
    });

    
  }, []);

  console.log(orderList)
  console.log(currentOrderId)
  let userCartList = cartList.filter((o) => o._ownerId === user._id);//???
  console.log(cartList)
  
  const successfulOrderHandler = (e) => {
    e.preventDefault();
    orderService
    .addOrder( userCartList)
    .then((result) => {
      if (result._id) {
        console.log(result._id);
        setOrdersList((currentOrders) => [...currentOrders, result]);
        userCartList.forEach(element => {
          cartService.delOrder(element._id)
        });
      }
   });

  setCurrentOrderId(cartList._id)
    navigate("/successful-order");
    setCurrentOrderId(cartList._id)

  };


  const cancelOrders = (e) => {
    e.preventDefault();
    userCartList.forEach(element => {
      cartService.delOrder(element._id)
     
    console.log(userCartList)
    });

    setCartList([]);
  };

  console.log(cartList)//all orders in the cart
  console.log(userCartList)//all orders in the cart
  userCartList.forEach(o=> {
    console.log(o)
    totalPrice += (Number(o.item.price) * Number(o.quantity))
  })
   totalPrice= totalPrice.toFixed(2)
  console.log()

  console.log(userCartList);
  console.log(cartList)
  return (
    <section className="cart">
      <h1 className="cart-page-heading">PIZZERIA</h1>
      <article className="cart-article">
        <h2 className="cart-article-heading">CART</h2>
        <article className="cart-info-article">
          <ul className="cart-list">
            {userCartList.length > 0 &&
              userCartList.map((order) => (
                <li key={order._id}>
                  <CartOrderItem order={order}/>
                </li>
              ))}
          </ul>
          <p className="total-price">
            Total Price:{totalPrice}$
          </p>
        </article>
      </article>

     { userCartList.length > 0 && <article className="btns-order">
        <button className="cancel-order" onClick={cancelOrders}>
          Cancel the order
        </button>
        <button className="place-order" onClick={successfulOrderHandler}>
          Place the order
        </button>
      </article>}

      {!userCartList.length && (
        <article className="no-orders">
          <p>No orders at the moment!</p>
        </article>
      )}
    </section>
  );
};

export default Cart;
