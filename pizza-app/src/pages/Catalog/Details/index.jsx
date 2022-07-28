import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Details = () => {
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
            <h1 className="details-pizza-name">PIZZA NAME</h1>
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
              DESCRIPTION PIZZA INGREDIENTS
            </p>
          </article>

          <article className="details-notes">
            <h2 className="notes-h2">NOTES</h2>
            <p className="notes-description">DESCRIPTION NOTES</p>
          </article>
        </article>
        <article className="details-order">
          <h2 className="details-price-order">7.00$</h2>
          <button className="details-btn-order">ADD TO THE ORDER</button>
        </article>

        <article className="details-btns-admin">
          <Link to="/edit/:pizzaId" className="details-btn-edit">
            EDIT
          </Link>
          <Link to="/like/:pizzaId" className="details-btn-edit">
            Like
          </Link>
          <Link to="/delete/:pizzaId" className="details-btn-delete">
            DELETE
          </Link>
        </article>
      
      </article>

     <article className="about-comments"> <article className="comments">
          <h3 className="heading-comments">Comments</h3>
          <ul className="list-comments">
            <li className="comment-item">Content comment</li>
            <li className="comment-item">Content comment</li>
            <li className="comment-item">Content comment</li>
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
