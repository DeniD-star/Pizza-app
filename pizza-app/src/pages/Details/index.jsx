import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useParams } from "react-router-dom";
import * as pizzaService from '../../services/pizzaService';
import { useEffect } from "react";

const Details = ({ 
  addComment
}) => {
  const { pizzaId } = useParams();
  const [pizza, setPizza] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState({
    username: "",
    comment: "",
  });

  const [error, setError] = useState({
    username: "",
    comment: "",
  });


  useEffect(()=>{
    pizzaService.getOne(pizzaId)
    .then(result=>{
      setPizza(result);
    })
  })
  

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((quantity) => quantity - 1);
  };

  const addCommentHandler = (e) => {
    e.preventDefault();
    addComment(pizzaId, `${comment.username} : ${comment.comment}`)
    console.log(comment);
  };

  const onChange = (e) => {
    setComment((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const validateUsername = (e)=>{
    const value = e.target.value;

    if(value.length < 3){ //--tova 
        setError(state =>({
            ...state,
            username: 'Username must be at least 3 characters long!'
        }))
    }

  }

  return (
    <section className="details-page-section">
      <article className="details-page">
        <article className="details-page-article-header">
          <img src={pizza.imageUrl} alt="img" className="details-img" />
          <article className="info-quantity">
            <h1 className="details-pizza-name">{pizza.name}</h1>
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
            <p className="ingredients-description">{pizza.ingredients}</p>
          </article>

          <article className="details-notes">
            <h2 className="notes-h2">NOTES</h2>
            <p className="notes-description">{pizza.notes}</p>
          </article>
        </article>
        <article className="details-order">
          <h2 className="details-price-order">{pizza.price}$</h2>
          <button className="details-btn-order">ADD TO THE ORDER</button>
        </article>

        <article className="details-btns-admin">
          <Link to={`/edit/${pizza._id}`} className="details-btn-edit">
            EDIT
          </Link>
          <Link to={`/like/${pizza._id}`} className="details-btn-edit">
            Like
          </Link>
          <p>0 likes</p>
          <Link to={`/delete/${pizza._id}`} className="details-btn-delete">
            DELETE
          </Link>
        </article>
      </article>

      <article className="about-comments">
        <article className="comments">
          <h3 className="heading-comments">Comments</h3>
          <ul className="list-comments">
            
            {pizza.comments?.map(comment=> 
            <li className="comment-item">
            <h3 className="username-name">{"username"}</h3>
            <p className="comment-content">{comment}</p>
          </li>)}
            
           
          </ul>
        </article>
        <article className="comments-add-mew">
          <h3 className="heading-comments">New Comment</h3>
          <form className="form" onSubmit={addCommentHandler}>
            <input 
              type="text" 
              name="username" 
              placeholder="Joel Doe" 
              onChange={onChange}
              onBlur={validateUsername}
              value={comment.username}
            />

            {/* tova otdolu su6to mislq 4e nqma da mi trqbva */}
            {error.username && 
            <div style={{color: 'red'}}> 
              {error.username}
            </div>}

            <textarea
              name="comment"
              placeholder="Comment......"
              onChange={onChange}
              value={comment.comment}
            />

            <input className="btn-add-comment" type="submit" value="Add" />
          </form>
        </article>
      </article>
    </section>
  );
};

export default Details;
