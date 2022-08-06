import React from 'react';



const DrinkItem = ({
    imageUrl,
    name,
    price,
    notes
}) => {
  return (
    <article className="drink-dessert-article">
        <article className="img-drink-dessert dessert">
            <img src={imageUrl} alt="drink-dessert-img dessert" className="drink-dessert-img dessert"/>
        </article>
        <article className="info-drink-dessert dessert">
            <h4 className="drink-dessert-price dessert">{price} $</h4>
            <h3 className="drink-dessert-name dessert">{name}</h3>
            <p className="description dessert">{notes}</p>
            <button className="add-drink-dessert dessert">ADD</button>
        </article>
      </article>
  )
}

export default DrinkItem;