import React from "react";
// import { Link } from 'react-router-dom';
import "./index.css";
import OrderItem from "./OrderItem";
import { useState, useEffect } from "react";
import * as ordersService from "../../../services/ordersService";
import * as pizzaService from "../../../services/pizzaService";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useParams } from "react-router";

const Myorders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(UserContext);
  const { cartId } = useParams();
  let finalOrders = [];

  const [item, setItem] = useState([]);
  const [date, setDate] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
 
  const [allUserOrders, setAllUsersOrders] = useState([]);

  useEffect(() => {
    ordersService.getAllOrders().then((res) => {
      setOrders(res);
    });

    //tutti gli orders del user
    //   ordersService.getOrderById(cartId).then((res)=>{
    //     if(res){
    //       setItem(res);

    //     }

    // })
  }, []);

 

  console.log(userOrders);

  useEffect(() => {
    const orderObj = orders.filter((o) => o._ownerId === user._id).reverse()
   setUserOrders(orderObj)
  }, [orders]);

  console.log(userOrders);

  return (
    <section className="my-orders-profile">
      <h1 className="my-orders-heading">My Orders</h1>
      <ul className="list-my-orders">
        {userOrders.length > 0 &&
        userOrders.map(order => {
          console.log(order) 
          return order.currentOrder.map(item =><OrderItem  key={item._id} item={item}/>)

        })}
      </ul>
      {userOrders.length === 0 && (
        <article className="empty-order-list">
          <p>Your order list is empty!</p>
        </article>
      )}
    </section>
  );
};

export default Myorders;
