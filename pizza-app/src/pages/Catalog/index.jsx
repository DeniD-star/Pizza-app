import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import TraditionalPizzas from "./TraditionalPizzas";

const Catalog = (props) => {
  return (
    <section className="menu">
      <ul className="nav-menu">
        <li className="list-item-menu">
          <Link
            to={"/traditionalPizzas"}
            className="link-menu"
            traditionalPizzas={<TraditionalPizzas />}
          >
            TRADITIONAL PIZZAS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
        <li className="list-item-menu">
          <Link to="/whitePizzas" className="link-menu">
            WHITE PIZZAS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
        <li className="list-item-menu">
          <Link to="/drinks" className="link-menu">
            DRINKS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
        <li className="list-item-menu">
          <Link to="/desserts" className="link-menu">
            DESSERTS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
        <li className="list-item-menu">
          <Link to="/createYourPizza" className="link-menu">
            CREATE YOUR PIZZA
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
      </ul>
    </section>
  );
};

export default Catalog;
