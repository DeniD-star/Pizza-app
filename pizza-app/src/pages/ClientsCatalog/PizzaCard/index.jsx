import React from 'react';
import { Link } from 'react-router-dom';
import'./index.css';



const PizzaCard = ({
   pizza
}) => {
   console.log(pizza);
  return (
    <article className="pizze-tradizionali margherita">
        <article className="img">
          <img
            src={pizza.imageUrl}
            alt="img-margherita"
          />
        </article>
        <article className="info">
            <h5 className="price">{pizza.price}$</h5>
          <h3 className="pizza-name">{pizza.name}</h3>
          <p className="description">{pizza.ingredients}</p>
          <Link to={`/details/${pizza._id}`}>Add</Link>
        </article>
      </article>
  )
}

export default PizzaCard;