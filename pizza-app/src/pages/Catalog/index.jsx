import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import TraditionalPizzas from "./TraditionalPizzas";
import CreateYourPizza from "./CreateYourPizza";



import { useContext } from "react"; 
import { UserContext } from "../../context/UserContext";

const Catalog = (props) => {

  const {user} = useContext(UserContext);

  return (
    <section className="menu">
      <ul className="nav-menu">
        <li className="list-item-menu">
          <Link
            to='/catalog/traditionalpizzas'
            className="link-menu"
            traditionalpizzas={<TraditionalPizzas />}
          >
            TRADITIONAL PIZZAS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
        <li className="list-item-menu">
          <Link to="/catalog/whitepizzas" className="link-menu">
            WHITE PIZZAS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
        <li className="list-item-menu">
          <Link to="/catalog/drinks" className="link-menu">
            DRINKS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
        <li className="list-item-menu">
          <Link to="/catalog/desserts" className="link-menu">
            DESSERTS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>

        { user.email && 
        <li className="list-item-menu">
          <Link to="/catalog/createYourPizza" className="link-menu"
          createYourPizza={<CreateYourPizza/>}>
            CREATE YOUR PIZZA
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
         }
      </ul>
    </section>
  );
};

export default Catalog;
