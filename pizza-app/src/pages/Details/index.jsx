import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useParams, useNavigate } from "react-router-dom";
import * as pizzaService from "../../services/pizzaService";
import { useEffect } from "react";
import { useContext } from "react";
import { PizzaContext } from "../../context/pizzaContext";
import { UserContext } from "../../context/UserContext";
import * as cartService from "../../services/cartService";
import Comments from "../../components/Comments";
import Likes from "../../components/Likes";

const Details = () => {
  const { removePizza } = useContext(PizzaContext);
  const { user } = useContext(UserContext);
  const { pizzaId } = useParams();
  const navigate = useNavigate();
  const [cartList, setCartList] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

 
  const [pizza, setPizza] = useState("");
  const [quantity, setQuantity] = useState(1);
  let pizzaPrice = pizza.price;

  if (!user.email && pizza && pizza.canBeEdit) {
    navigate("/");
  }

  useEffect(() => {
    
    pizzaService.getOne(pizzaId).then((result) => {
      if (result._id) {
        setPizza(result);
      }
    });
  }, []);

  const isOwner = pizza._ownerId === user._id;

  const increaseQuantity = (e) => {
    e.preventDefault();
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    setQuantity((quantity) => quantity - 1);
  };
  pizzaPrice = Number(pizza.price);
  console.log(pizzaPrice);



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

  const addToTheCartHandler = (e) => {
    e.preventDefault();

    if (!user.email) {
      navigate("/login");
    }
    cartService
      .addToTheCart(pizzaId, user, quantity, pizza, pizzaPrice)
      .then((result) => {
        console.log(result);
        if (result._id) {
          console.log(result._id);
          setCartList((currentItems) =>
            currentItems.length > 0 ? [...currentItems, result] : [result]
          );
          console.log("item");
          setIsAdded(true);
        }
        console.log(cartList);
      });
    
  };


  isAdded &&
    setTimeout(() => {
      setIsAdded(false);
    }, 5000);

  console.log(pizza);
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
          <h2 className="details-price-order">{pizzaPrice.toFixed(2)}$</h2>
          <button className="details-btn-order" onClick={addToTheCartHandler}>
            ADD TO THE ORDER
          </button>
          {isAdded && <p className="pizzaP">{pizza.name} added to the cart!</p>}
        </article>

        {pizza.canBeEdit && (
          <article className="details-btns-admin">
            {isOwner && (
              <Link to={`/edit/${pizza._id}`} className="details-btn-edit">
                EDIT
              </Link>
            )}
            <Likes/>
            {isOwner && (
              <button className="details-btn-delete" onClick={deletePizza}>
                Delete
              </button>
            )}
          </article>
        )}
      </article>

      <Comments/>
     
    </section>
  );
};

export default Details;
