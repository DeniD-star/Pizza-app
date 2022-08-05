import React from "react";
import { Link } from "react-router-dom";
import PizzaCard from "./PizzaCard";
import "./index.css";

import * as pizzaService from '../../services/pizzaService';

import { useContext, useEffect, useState } from "react"; //-tezi dvete
import { UserContext } from "../../context/UserContext";
import { PizzaContext } from "../../context/pizzaContext";


const ClientsCatalog = () => {
  const [clientsPizzas, setClientsPizzas] = useState([])
 const {user} = useContext(UserContext);
 const {pizzas} = useContext(PizzaContext)

 console.log(pizzas);

 useEffect(()=>{
  pizzaService.getAll()
  .then(result=>{
    console.log(result);
  result = result.filter(p=> p.type === 'client');
    setClientsPizzas(result)
  })      
}, [])

  // const isLoggedIn = useIsLoggedIn();
  return (
    <section className="client-section">
      <article className="client-section-title">
        <h1 className="client-section-heading">
          Pizzas created by our clients
        </h1>
        <p className="client-section-subtitle">
          We are so exited to realize that this is not just a dream. Is honer
          for us to make you , our clients, part of our passion. Now, you'll not
          just order a pizza, but you'll be able to create it
          <strong> by your self</strong>.
        </p>
        <p className="client-section-subtitle">
          Share your pizza with others. Become our client.
        </p>
        <p className="client-section-subtitle">
          Make them taste your idea about pizza, and see their reactions!
        </p>
      </article>
      {pizzas.length > 0 ?
      <ul className="my-pizzas-list">
        {clientsPizzas.length > 0 && clientsPizzas.map((pizza) => (
          <li key={pizza._id}>
            <PizzaCard pizza={pizza} />
          </li>
        ))}
      </ul> :
<p className="no-pizzas">No pizzas yet!</p>}
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

export default ClientsCatalog;
