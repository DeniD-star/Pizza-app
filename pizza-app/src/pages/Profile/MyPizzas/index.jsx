import React from "react";
import PizzaCard from "../../ClientsCatalog/PizzaCard";
import "./index.css";
import { useContext } from "react";
import { PizzaContext } from "../../../context/pizzaContext";
import { UserContext } from "../../../context/UserContext";
import { Link } from "react-router-dom";

const Mypizzas = () => {
  const { pizzas } = useContext(PizzaContext);
  const { user } = useContext(UserContext);

  let ownerPizzas = pizzas.filter((p) => p._ownerId === user._id);
  console.log(ownerPizzas);

  return (
    <section className="my-pizzas-profile">
      <h1 className="profile-heading">Here are pizzas created by you!</h1>
      <article className="section-article">
        <ul className="my-pizzas-list">
          {ownerPizzas.length > 0 ? 
          ownerPizzas.map((pizza) => (
            <li key={pizza.id}>
              <PizzaCard pizza={pizza} />
            </li>
          )) 
        :
        <p className="no-pizzas-my">You haven't created a pizza yet</p>}
        </ul>
      </article>
      {user.email && (
        <div className="add-btn-container">
          <Link to="/catalog/createYourPizza" className="btn-add">
            + Add Your Pizza
          </Link>
        </div>
      )}
    </section>
  );
};

export default Mypizzas;
