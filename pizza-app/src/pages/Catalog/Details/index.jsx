import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Details = ({
  pizzaName,
  imageUrl,
  ingredients,
  notes,
  price
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((quantity) => quantity - 1);
  };
  return (
    <section className="details-page-section">
      <article className="details-page">
        <article className="details-page-article-header">
          <img
            src={require("./images/margherita-pizza.jpg")}
            alt="img"
            className="details-img"
          />
          <article className="info-quantity">
            <h1 className="details-pizza-name">{pizzaName}</h1>
            <article className="details-quantity">
              <h2 className="details-quantity-header">QUANTITY</h2>
              <article>
                <button className="decrease" onClick={decreaseQuantity}>
                  -
                </button>
                <h2 className="quantity-heading">{quantity}</h2>
                <button className="increase" onClick={increaseQuantity}>
                  +
                </button>
              </article>
            </article>
          </article>
        </article>
        <article className="other-info">
          <article className="details-ingredients">
            <h2 className="ingredients-h2">INGREDIENTS</h2>
            <p className="ingredients-description">
             {ingredients}
            </p>
          </article>

          <article className="details-notes">
            <h2 className="notes-h2">NOTES</h2>
            <p className="notes-description">{notes}</p>
          </article>
        </article>
        <article className="details-order">
          <h2 className="details-price-order">{price}$</h2>
          <button className="details-btn-order">ADD TO THE ORDER</button>
        </article>

        <article className="details-btns-admin">
          <Link to="/edit/:pizzaId" className="details-btn-edit">
            EDIT
          </Link>
          <Link to="/like/:pizzaId" className="details-btn-edit">
            Like
          </Link>
          <p>0 likes</p>
          <Link to="/delete/:pizzaId" className="details-btn-delete">
            DELETE
          </Link>
        </article>
      
      </article>

     <article className="about-comments"> 
     <article className="comments">
          <h3 className="heading-comments">Comments</h3>
          <ul className="list-comments">
            <li className="comment-item">
              <h3 className="username-name">{'username'}</h3> 
              <p className="comment-content">Content comment</p></li>
            <li className="comment-item">
            <h3 className="username-name">{'username'}</h3> 
              <p className="comment-content">ok</p></li>
            <li className="comment-item">
              <h3 className="username-name">{'username'}</h3>
              <p className="comment-content">Content comment</p></li>
          </ul>
        </article>
        <article className="comments-add-mew">
          <h3 className="heading-comments">New Comment</h3>
          <form className="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn-add-comment" type="submit" value="Add" />
          </form>
        </article></article>
    </section>
  );
};

export default Details;
