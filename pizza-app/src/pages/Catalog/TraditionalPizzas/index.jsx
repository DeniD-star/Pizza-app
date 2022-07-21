import React from "react";
import { Link } from "react-router-dom";
import Details from "../Details";
import './index.css';


const TraditionalPizzas = () => {
  return (
  
   
    <section className="traditional-pizzas">
 
      <article className="pizze-tradizionali margherita">
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/Margherita.jpg")}
            alt="img-margherita"
          />
        </article>
        <article className="info">
            <h5 className="price">4.50 $</h5>
          <h3 className="pizza-name">Margherita</h3>
          <p className="description">Salsa di pomodoro , Mozzarella fior di latte , Olio extra vergine di oliva , Basilico</p>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali americana">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/Americana.jpg")}
            alt="img-americana"
          />
        </article>
        <article className="info">
        <h5 className="price">6.50 $</h5>
          <h3 className="pizza-name">Americana</h3>
          <pizza className="description">Mozzarella fior di latte , Salsa di pomodoro , Wurstel , Patate fritte</pizza>
          <Link to="/details/:pizzaId" details={<Details/>}>Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali montanara">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/montanara.jpg")}
            alt="img-montanara"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">8.00 $</h5>
          <h3 className="pizza-name">Montanara</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella fior di latte , Speck , Brie , Funghi porcini</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali buffala">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/Buffala.jpg")}
            alt="img-buffala"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">6.50 $</h5>
          <h3 className="pizza-name">Buffala</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella di bufala d.o.p. , Olio extra vergine di oliva , Basilico</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali chef">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/Chef.jpg")}
            alt="img-chef"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">7.50 $</h5>
          <h3 className="pizza-name">Chef</h3>
          <pizza className="description">Mozzarella fior di latte , Salsa di pomodoro , Panna , Funghi , Speck</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali 4stagioni">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/4stagioni,jpg.jpg")}
            alt="img-4stagioni"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">7.00 $</h5>
          <h3 className="pizza-name">Quattro Stagioni</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella fior di latte , Prosciutto cotto , Funghi , Carciofi , Olive</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali oasi">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/oasi.jpg")}
            alt="img-oasi"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">6.50 $</h5>
          <h3 className="pizza-name">Oasi</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella fior di latte , Salamino piccante , Zola , Olive taggiasche</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali 4formaggi">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/4formaggi.jpg")}
            alt="img-4formaggi"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">6.50 $</h5>
          <h3 className="pizza-name">Quattro Formaggi</h3>
          <pizza className="description">Parmigiano , Zola , Salsa di pomodoro , Mozzarella fior di latte , Brie</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali capricciosa">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/Cpricciosa.jpg")}
            alt="img-capricciosa"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">7.50 $</h5>
          <h3 className="pizza-name">Capricciosa</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella fior di latte , Carciofi , Funghi , Olive taggiasche </pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali siciliana">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/siciliana.jpg")}
            alt="img-margherita"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">6.00 $</h5>
          <h3 className="pizza-name">Siciliana</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella fior di latte , Acciughe , Capperi di Pantelleria , Olive</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
    </section>
  
  );
};

export default TraditionalPizzas;
