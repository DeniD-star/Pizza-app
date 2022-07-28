import React from "react";
import { Link } from "react-router-dom";
import PizzaCard from "../PizzaCard";
import "./index.css";
import useIsLoggedIn from "../../customHook/useIsLoggedIn";


const ClientCatalog = (props) => {
  const isLoggedIn = useIsLoggedIn();

    const clientsPizzas = [
        { id: 0, name: "Name", imageUrl:'https://www.kuokko.com/it/webservice/restaurant/get_image/11/61rAHinjJq4Op5bDaQ9I', ingredients:'Salsa di pomodoro , Mozzarella fior di latte , Olio extra vergine di oliva , Basilico', price: '4.50'}
    ]
  return (
    <section className="client-section">
      <article className="client-section-title">
        <h1 className="client-section-heading">
          Pizzas created by our clients
        </h1>
        <p className="client-section-subtitle">
          We are so exited to realize that this is not just a dream. Is owner for us
          to make you , our clients, part of our passion. Now, you'll not just
          order a pizza, but you'll be able to create it
          <strong> by your self</strong>.
        </p>
        <p className="client-section-subtitle">
          Share your pizza with others. Become our client.
        </p>
        <p className="client-section-subtitle">
        Make them taste your idea about pizza, and see their reactions!
        </p>
      </article>

      <ul className="my-pizzas-list">
          {clientsPizzas.map(pizza=> <li key={pizza.id}><PizzaCard
           imageUrl={pizza.imageUrl}
           name={pizza.name}
           ingredients={pizza.ingredients}
           price={pizza.price}
           /></li>)}
        </ul>

        { isLoggedIn && <div className="add-btn-container">
        <Link to='/createYourPizza' className="btn-add">+ Add Your Pizza</Link>
      </div>}

    </section>
  );
};

export default ClientCatalog;
