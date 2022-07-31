import React from "react";
import { Link } from "react-router-dom";
import PizzaCard from "./PizzaCard";
import "./index.css";
import useIsLoggedIn from "../../customHook/useIsLoggedIn";

import { useContext } from "react"; //-tezi dvete
import { UserContext } from "../../context/UserContext";


const ClientsCatalog = ({pizzas}) => {
 const {user} = useContext(UserContext);

  const isLoggedIn = useIsLoggedIn();

  // const clientsPizzas = [
  //   {
  //     _id: 0,
  //     name: "Name",
  //     imageUrl:
  //       "https://www.kuokko.com/it/webservice/restaurant/get_image/11/61rAHinjJq4Op5bDaQ9I",
  //     ingredients:
  //       "Salsa di pomodoro , Mozzarella fior di latte , Olio extra vergine di oliva , Basilico",
  //     price: "4.50",
  //   },
  //   {
  //     _id: 1,
  //     name: "Bella Margherita",
  //     imageUrl:
  //       "https://media.istockphoto.com/photos/slice-of-pizza-with-tomato-and-melting-hot-melted-mozzarella-picture-id1285997591?k=20&m=1285997591&s=612x612&w=0&h=MDZk0y9CLxSAqlYjU-S_lfSOYndNTB85-W-Susik0TQ=",
  //     ingredients:
  //       "Double portion of mozzarella cheese, salsa di pomodoro",
  //     price: "6.00",
  //   },
  //   {
  //     _id: 2,
  //     name: "La mia Preferita",
  //     imageUrl:
  //       "https://blog.giallozafferano.it/ricettedilibellula/wp-content/uploads/2016/11/pizza-salame-pecorino.jpg",
  //     ingredients:
  //       "Salame piccante, peccorino a volontà, salsa di pomodoro",
  //     price: "7.50",
  //   },
  // ];
  return (
    <section className="client-section">
      <article className="client-section-title">
        <h1 className="client-section-heading">
          Pizzas created by our clients
        </h1>
        <p className="client-section-subtitle">
          We are so exited to realize that this is not just a dream. Is owner
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
        {pizzas.map((pizza) => (
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
