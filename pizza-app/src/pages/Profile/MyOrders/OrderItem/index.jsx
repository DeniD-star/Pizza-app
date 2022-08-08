import React from 'react';
import { Link } from 'react-router-dom';


const OrderItem = ({
   order,
   item
}) => {


  return (
    <article className="my-order-article">
    <img src={order.item.imageUrl} alt="" className="my-img-order" />
     <p className="my-order-quantity">{order.quantity}</p>
     <p className="my-order-name">{order.item.name}</p>
     <p className="my-order-date">Purchased on: {order._createdOn}</p>
     <Link to={`/details/${order.item._id}`}>Buy again</Link>
</article>
  )
}

export default OrderItem;