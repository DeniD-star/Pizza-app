import React, { useState } from "react";
import { Link } from "react-router-dom";
import PizzaCard from "../../ClientsCatalog/PizzaCard";
import "./index.css";

const WhitePizzas = () => {
  const whitePizzas = [
    {
      id: 0,
      name: "Delicata",
      imageUrl:
        "https://www.kuokko.com/it/webservice/restaurant/get_image/11/fO96Xtj5hthvOKHyhMXe",
      ingredients:
        "Mozzarella fior di latte, Spinaci, Zucchine, Funghi porcini",
      price: "8.00",
    },
    {
      id: 1,
      name: "Partenopea",
      imageUrl:
        "https://www.kuokko.com/it/webservice/restaurant/get_image/11/kdPOsMKT3Gnhz7zhGnaA",
      ingredients:
        "Pomodorini salsati interi, Mozzarella di bufala d.o.p., Basilico",
      price: "7.00",
    },
    {
      id: 2,
      name: "Primavera",
      imageUrl:
        "https://www.kuokko.com/it/webservice/restaurant/get_image/11/KVvnJ5vbzTNKwyUwBVxQ",
      ingredients:
        "Mozzarella fior di latte, Pomodorini, Rucola, Scaglie di parmigiano, Prosciutto crudo",
      price: "8.00",
    },
    {
      id: 3,
      name: "Regina",
      imageUrl:
        "https://www.kuokko.com/it/webservice/restaurant/get_image/11/DxTmVCJkOwGE0nwDRrxK",
      ingredients: "Mozzarella di bufala d.o.p., Pomodorini, Basilico",
      price: "7.00",
    },
    {
      id: 4,
      name: "Saporita",
      imageUrl:
        "https://www.kuokko.com/it/webservice/restaurant/get_image/11/6HR0OAve6t6WcFaSWoRw",
      ingredients:
        "Mozzarella fior di latte, Funghi, Salsiccia, Scamorza, Peperoncino",
      price: "6.50",
    },
    {
      id: 5,
      name: "Spaccanapoli",
      imageUrl:
        "https://www.kuokko.com/it/webservice/restaurant/get_image/11/00f9c18c6ee3c45350fd6c4d147d9e49",
      ingredients:
        "Mozzarella fior di latte, Patate novelle al forno, Porchetta, Funghi",
      price: "7.50",
    },
    {
      id: 6,
      name: "Tokyo",
      imageUrl:
        "https://www.kuokko.com/it/webservice/restaurant/get_image/11/ZZRm2RVCo4TZNs6E7Ino",
      ingredients: "Prosciutto cotto, Funghi, Salsiccia, Panna",
      price: "7.50",
    },
    {
      id: 7,
      name: "Vagdo",
      imageUrl:
        "https://www.kuokko.com/it/webservice/restaurant/get_image/11/hhG8HwDCNDUpK0pRupa8",
      ingredients:
        "Mozzarella fior di latte, Patate novelle al forno, Brie, Pesto fatto in casa, Porchetta",
      price: "8.50",
    },
  ];

  return (
    <section className="white-pizzas">
      <h1 className="white-pizzas-title">White Pizzas</h1>
      <article className="white-pizzas-section">
        <ul className="white-pizzas-list">
          {whitePizzas.map((pizza) => (
            <li key={pizza.id}>
              <PizzaCard
                imageUrl={pizza.imageUrl}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
              />
            </li>
          ))}
        </ul>
        {/* <article className="pizze-bianche delicata">
        <article className="img">
          <img
            src={require("../../../pizze bianche images/delicata.jpg")}
            alt="img-delicata"
          />
        </article>
        <article className="info">
            <h5 className="price">8.00 $</h5>
          <h3 className="pizza-name">Delicata</h3>
          <pizza className="description">Mozzarella fior di latte , Spinaci , Zucchine , Funghi porcini</pizza>
          <Link to="/pizza-delicata/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche partenopea">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/partenopea.jpg")}
            alt="img-partenopea"
          />
        </article>
        <article className="info">
        <h5 className="price">7.00 $</h5>
          <h3 className="pizza-name">Partenopea</h3>
          <pizza className="description">Pomodorini salsati interi , Mozzarella di bufala, Basilico</pizza>
          <Link to="/pizza-partenopea/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche primavera">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/primavera.jpg")}
            alt="img-primavera"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">8.00 $</h5>
          <h3 className="pizza-name">Primavera</h3>
          <pizza className="description">Mozzarella fior di latte , Pomodorini , Rucola , Scaglie di parmigiano , Prosciutto</pizza>
          <Link to="/pizza-primavera/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche regina">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/regina.jpg")}
            alt="img-regina"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">7.00 $</h5>
          <h3 className="pizza-name">Regina</h3>
          <pizza className="description">Mozzarella di bufala d.o.p. , Pomodorini , Basilico</pizza>
          <Link to="/pizza-regina/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche saporita">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/saporita.jpg")}
            alt="img-saporita"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">6.50 $</h5>
          <h3 className="pizza-name">Saporita</h3>
          <pizza className="description">Mozzarella fior di latte , Funghi , Salsiccia , Scamorza , Peperoncino</pizza>
          <Link to="/pizza-saporita/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche spaccanapoli">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/spaccanapoli.jpg")}
            alt="img-4stagioni"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">7.50 $</h5>
          <h3 className="pizza-name">SpaccaNapoli</h3>
          <pizza className="description">Mozzarella fior di latte , Patate novelle al forno , Porchetta , Funghi</pizza>
          <Link to="/pizza-spaccanapoli/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche tokyo">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/Tokyo.jpg")}
            alt="img-tokyo"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">7.50 $</h5>
          <h3 className="pizza-name">Tokyo</h3>
          <pizza className="description">Prosciutto cotto , Funghi , Salsiccia , Panna</pizza>
          <Link to="/pizza-tokyo/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche vagdo">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/Vagdo.jpg")}
            alt="img-vagdo"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">8.50 $</h5>
          <h3 className="pizza-name">Vagdo</h3>
          <pizza className="description">Mozzarella fior di latte , Patate novelle al forno , Brie , Pesto fatto in casa , Porchetta</pizza>
          <Link to="/pizza-vagdo/more">Add</Link>
        </article>
      </article> */}
      </article>
    </section>
  );
};

export default WhitePizzas;
