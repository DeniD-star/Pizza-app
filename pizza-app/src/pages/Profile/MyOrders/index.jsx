import React from "react";
// import { Link } from 'react-router-dom';
import "./index.css";
import OrderItem from "./OrderItem";

const Myorders = () => {
  const myorders = [
    {
      id: 0,
      name: "Name",
      quantity: 2,
      imageUrl:
        "https://www.kuokko.com/it/webservice/restaurant/get_image/11/61rAHinjJq4Op5bDaQ9I",
      date: "27.07.2022",
    },
    {
      id: 1,
      name: "Name",
      quantity: 1,
      imageUrl:
        "https://www.kuokko.com/it/webservice/restaurant/get_image/11/61rAHinjJq4Op5bDaQ9I",
      date: "27.07.2022",
    },
  ];
  return (
    <section className="my-orders-profile">
      <h1 className="my-orders-heading">My Orders</h1>
      <ul className="list-my-orders">
        {myorders.map((order) => (
          <li key={order.id}>
            <OrderItem
              imageUrl={order.imageUrl}
              name={order.name}
              quantity={order.quantity}
              date={order.date}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Myorders;
