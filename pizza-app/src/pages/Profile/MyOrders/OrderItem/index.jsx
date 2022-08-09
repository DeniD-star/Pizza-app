import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import * as orderService from '../../../../services/ordersService';


const OrderItem = ({
   order,
   item
}) => {

  const [allUsersOrder, setAllUsersOrder] = useState([]);
  console.log(order)

  console.log(allUsersOrder);

  return (
    <article className="my-order-article">
    <img src={order.order.item.imageUrl} alt="" className="my-img-order" />
     <p className="my-order-quantity">{order.order.quantity}</p>
     <p className="my-order-name">{order.order.item.name}</p>
     <p className="my-order-date">Purchased on: {order.order._createdOn}</p>
     <Link to={`/details/${order.order.item._id}`}>Buy again</Link>
</article>
  )
}

export default OrderItem;