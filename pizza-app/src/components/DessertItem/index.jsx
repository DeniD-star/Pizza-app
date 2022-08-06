import React from 'react';



const DessertItem = ({
    imageUrl,
    name,
    price,
    notes
}) => {
  return (
    <article className="dessert-article">
        <article className="img-dessert">
            <img src={imageUrl} alt="dessert-img" className="dessert-img"/>
        </article>
        <article className="info-dessert">
            <h4 className="dessert-price">{price} $</h4>
            <h3 className="dessert-name">{name}</h3>
            <p className="description">{notes}</p>
            <button className="add-dessert">ADD</button>
        </article>
      </article>
  )
}

export default DessertItem;