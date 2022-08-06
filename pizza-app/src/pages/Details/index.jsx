import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useParams, useNavigate } from "react-router-dom";
import * as pizzaService from "../../services/pizzaService";
import * as commentService from "../../services/commentService";
import { useEffect } from "react";
import { useContext } from "react";
import { PizzaContext } from "../../context/pizzaContext";
import { UserContext } from "../../context/UserContext";
import * as likeService from '../../services/likeService';

const Details = () => {
  const { addComment, fetchPizzaDetails, selectPizzaFromState, removePizza } = useContext(PizzaContext);
  const { user } = useContext(UserContext);
  const { pizzaId } = useParams();
  const navigate = useNavigate();
  const[commentsList, setCommentsList] = useState([]);
  const[likesNumber, setLikesNumber] = useState(0);
  const[canAddLike, setCanAddLike] = useState(true);
  const[likeList, setLikeList] = useState([]);

  

  console.log(commentsList)
  const [pizza, setPizza] = useState('')
 
  useEffect(()=>{
    likeService.getLikesByPizzaId(pizzaId)
    .then(res=> {
      if(res.length> 0){
        setLikeList(res)
        var likes = 0
        res.forEach( item => {
            
          if ( item.pizzaId == pizzaId ) {
            likes ++;

          }
          if(item._owneId == user._id){
              setCanAddLike(false)
          }
          
        })
        
        console.log(likes)
        setLikesNumber(likes)
      
      }
    })
    commentService.getPizzaById(pizzaId)
  .then(res=> {
    if(res.length > 0){
      setCommentsList(res)
      
    }
  })
    pizzaService.getOne(pizzaId)
    .then(result=>{
      if(result._id){
        setPizza(result);
      }
    })
  }, [])

  const isOwner = pizza._ownerId === user._id;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((quantity) => quantity - 1);
  };

  useEffect(() => {
    (async () => {
      const pizzaDetails = await pizzaService.getOne(pizzaId);
      const pizzaComments = await commentService.getPizzaById(pizzaId);

      console.log(pizzaComments)

      fetchPizzaDetails(pizzaId, {
        ...pizzaDetails,
       comments: pizzaComments.length > 0 ? pizzaComments.map((x) => `${x.user.username}: ${x.text}`) : [],
     
      });
      console.log(pizzaComments)
    })();
  }, []);

  const addCommentHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = formData.get("comment");
   
   commentService.createComment(pizzaId, comment, user.username)
   .then(result=>{
     if(result._id){
       setCommentsList(currentComments =>[...currentComments, result])
     }
   })
  
  };

  const likePizza = ()=>{
    likeService.addLike(pizzaId, user.username)
    .then(res=>{
      setLikesNumber(tempt=> tempt + 1)
      setLikeList(list=> [...list, res])
      setCanAddLike(false)
    })
  }

  const deletePizza = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this pizza?"
    );

   
    if (confirmation) {
      pizzaService.remove(pizzaId).then(() => {
        removePizza(pizzaId);
        navigate("/clientsPizzas");
      });
    }
  };

  const addOrderToMyProfile = ()=>{
    
  }
  const removeLike = ()=>{
    var likeId = '';
    if(likeList.length == 0)return;
    likeList.forEach(item=> {
      if(item._ownerId == user._id && item.pizzaId == pizzaId){
        likeId = item._id
      }
    })
    likeService.removeLike(likeId)
    .then(res=> {
      if(res._deletedOn){
        setLikesNumber(likesNumber-1);
        setCanAddLike(true)
      }
    })
  }

  console.log(pizza)
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
          <button className="details-btn-order" onClick={addOrderToMyProfile}>ADD TO THE ORDER</button>
        </article>

        {pizza.canBeEdit && (
          <article className="details-btns-admin">
           {isOwner && <Link to={`/edit/${pizza._id}`} className="details-btn-edit">
              EDIT
            </Link>}
            { !isOwner && canAddLike &&
            <button className="details-btn-edit" onClick={likePizza}>
              Like
            </button>}
            { !isOwner && !canAddLike &&
            <button className="details-btn-edit" onClick={removeLike}>
              Dislike
            </button>}
            <p>{likesNumber} likes</p>
           {isOwner && <button className="details-btn-delete" onClick={deletePizza}>
              Delete
            </button>}
          </article>
        )}
      </article>
      {pizza.canBeEdit && (
      <article className="about-comments">
        <article className="comments">
          <h3 className="heading-comments">Comments:</h3>
          <ul className="list-comments">
           
          {commentsList.length > 0 && commentsList.map(({_id, text, author}) => (
              <li key={_id} className="comment-item">
                <h3 className="username-name">{author}<i className="fa-solid fa-check"></i></h3>
                <p className="comment-content">{text}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="comments-add-mew">
          <h3 className="heading-comments">New Comment</h3>
          <form className="form" onSubmit={addCommentHandler}>
            <textarea name="comment" placeholder="Comment......"/>

            <input className="btn-add-comment" type="submit" value="Add" />
          </form>
        </article>
      </article>
       )}
    </section>
  );
};

export default Details;
