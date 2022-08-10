import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import * as orderService from '../../../../services/ordersService';


const OrderItem = ({
   item
}) => {

  const [allUsersOrder, setAllUsersOrder] = useState([]);
  console.log(item)

  console.log(allUsersOrder);

  return (
    <article className="my-order-article">
    <img src={item.item.imageUrl} alt="" className="my-img-order" />
     <p className="my-order-quantity">{item.quantity}</p>
     <p className="my-order-name">{item.item.name}</p>
     <p className="my-order-date">Purchased on: {new Date(item.dateOrder).toLocaleString()}</p>
     <Link to={`/details/${item.item._id}`}>Buy again</Link>
</article>
  )
}

export default OrderItem;