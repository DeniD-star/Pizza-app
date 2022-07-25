import React from 'react';
import { Link } from 'react-router-dom';


const OrderItem = ({
    imageUrl,
    quantity,
    name,
    date
}) => {

   
  return (
    <article className="my-order-article">
    <img src={imageUrl} alt="" className="my-img-order" />
     <p className="my-order-quantity">{quantity}</p>
     <p className="my-order-name">{name}</p>
     <p className="my-order-date">Purchased on: {date}</p>
     <Link to="/same-order">Buy again</Link>
</article>
  )
}

export default OrderItem;