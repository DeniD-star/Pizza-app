import React from "react";
import PizzaCard from "../../ClientsCatalog/PizzaCard";
import "./index.css";
import { useContext } from "react";
import { PizzaContext } from "../../../context/pizzaContext";
import { UserContext } from "../../../context/UserContext";

const Mypizza = () => {
  const { pizzas } = useContext(PizzaContext);
  const { user } = useContext(UserContext);

  let ownerPizzas = pizzas.filter((p) => p._ownerId === user._id);
  console.log(ownerPizzas);

  return (
    <section className="my-pizzas-profile">
      <h1 className="profile-heading">Here are pizzas created by you!</h1>
      <article className="section-article">
        <ul className="my-pizzas-list">
          {ownerPizzas.map((pizza) => (
            <li key={pizza.id}>
              <PizzaCard pizza={pizza} />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Mypizza;
