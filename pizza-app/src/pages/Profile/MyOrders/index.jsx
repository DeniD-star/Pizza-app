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


const Myorders = ({order, cartList}) => {
  const [orders, setOrders] = useState([]);
  const {user} = useContext(UserContext);
  const {cartId} = useParams();
  console.log(cartId);
  const[item, setItem] = useState([]);
  const [date, setDate] = useState([]);
  const [allUserOrders, setAllUsersOrders] = useState([]);

useEffect(()=>{
  ordersService.getAllOrders().then((res) => {
    setOrders(res);
  });

 //tutti gli orders del user
//   ordersService.getOrderById(cartId).then((res)=>{
//     if(res){
//       setItem(res);
      
//     }

    
// })
},[])

  let userOrders = orders.filter((o) => o._ownerId === user._id);
 
  console.log(userOrders);
  console.log(cartList);
  console.log(item);
  useEffect(()=>{
      userOrders.forEach((o)=>{
        console.log(o)
        setAllUsersOrders(currentOrders=> currentOrders.length > 0 ? [...currentOrders, o] : [])
      })
  },[])

  console.log(allUserOrders);
 
  // return (
  //   <section className="my-orders-profile">
  //     <h1 className="my-orders-heading">My Orders</h1>
  //     <ul className="list-my-orders">
  //       {userOrders.length > 0 &&
  //         userOrders.map((order) => (
  //           <li key={order._id}>
  //             <OrderItem order={order} item={item} date={date}/>
  //           </li>
  //         ))}
  //     </ul>
  //     {userOrders.length === 0 && <article className="empty-order-list">
  //       <p>Your order list is empty!</p>
  //     </article>}
  //   </section>
  // );
};

export default Myorders;
