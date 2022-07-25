import React from 'react';
import { Link } from 'react-router-dom';


const PizzaCard = ({
    imageUrl,
    name,
    price,
    ingredients
}) => {
  return (
    <article className="pizze-tradizionali margherita">
        <article className="img">
          <img
            src={imageUrl}
            alt="img-margherita"
          />
        </article>
        <article className="info">
            <h5 className="price">{price}$</h5>
          <h3 className="pizza-name">{name}</h3>
          <p className="description">{ingredients}</p>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
  )
}

export default PizzaCard;