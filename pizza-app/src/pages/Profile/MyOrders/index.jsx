import React from "react";
// import { Link } from 'react-router-dom';
import "./index.css";
import OrderItem from "./OrderItem";
import { useState, useEffect } from "react";
import * as ordersService from "../../../services/ordersService";
import * as pizzaService from '../../../services/pizzaService'
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useParams } from "react-router";


const Myorders = () => {
  const [orders, setOrders] = useState([]);
  const {user} = useContext(UserContext);
  const {itemId} = useParams();
  const[item, setItem] = useState([]);
  const [date, setDate] = useState([]);

useEffect(()=>{
  ordersService.getAllOrders().then((res) => {
    setOrders(res);
  });

  pizzaService.getOne(itemId).then((res)=>{
    if(res){
      setItem(res);
      
    }

    
})
},[])
 


  let userOrders = orders.filter((o) => o._ownerId === user._id);
  console.log(userOrders);
  console.log(item);

 
  return (
    <section className="my-orders-profile">
      <h1 className="my-orders-heading">My Orders</h1>
      <ul className="list-my-orders">
        {userOrders.length > 0 &&
          userOrders.map((order) => (
            <li key={order._id}>
              <OrderItem order={order} item={item} date={date}/>
            </li>
          ))}
      </ul>
      {userOrders.length === 0 && <article className="empty-order-list">
        <p>Your order list is empty!</p>
      </article>}
    </section>
  );
};

export default Myorders;
