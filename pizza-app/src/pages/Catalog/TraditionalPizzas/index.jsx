import React, { useState } from "react";
import { Link } from "react-router-dom";
import PizzaCard from "../../PizzaCard";
import Details from "../Details";
import './index.css';


const TraditionalPizzas = () => {

  const[cardsPizza, setCardsPiza] = useState([
    {id: 0, name: 'Margherita', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/61rAHinjJq4Op5bDaQ9I', ingredients: 'Salsa di pomodoro , Mozzarella fior di latte , Olio extra vergine di oliva , Basilico', price: "4.50"},
    {id: 1, name: 'Americana', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/JAp0dRGhLUA5wTXmaY40', ingredients: 'Mozzarella fior di latte, Salsa di pomodoro, Wurstel, Patate fritte', price: "6.50"},
    {id: 2, name: 'Montanara', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/yipq5N2eRHY7QyegYYZu', ingredients: 'Salsa di pomodoro, Mozzarella fior di latte, Speck, Brie, Funghi porcini', price: "8.00"},
    {id: 3, name: 'Buffala', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/5qvwFLAiSHr9qfGxIwdt', ingredients: 'Salsa di pomodoro, Mozzarella di bufala d.o.p., Olio extra vergine di oliva, Basilico', price: "6.50"},
    {id: 4, name: 'Chef', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/faaf60a5e638fbcbad16fbab2ca36942', ingredients: 'Mozzarella fior di latte, Salsa di pomodoro, Panna, Funghi, Speck', price: "7.50"},
    {id: 5, name: 'Quattro Staggioni', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/tlmZCk3KAtEmJhPigWth', ingredients: 'Salsa di pomodoro, Mozzarella fior di latte, Prosciutto cotto, Funghi, Carciofi, Olive taggiasche', price: "7.00"},
    {id: 6, name: 'Oasi', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/g9kgySKuGwwSFW0lqkfz', ingredients: 'Salsa di pomodoro, Mozzarella fior di latte, Salamino piccante, Zola, Olive taggiasche', price: "6.50"},
    {id: 7, name: 'Quattro formaggi', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/Ook8RijuuLkeI3w5exuE', ingredients: 'Parmigiano, Zola, Salsa di pomodoro, Mozzarella fior di latte, Brie', price: "6.50"},
    {id: 8, name: 'Capricciosa', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/VgCXc6i8HXaGcjoTa6dt', ingredients: 'Salsa di pomodoro, Mozzarella fior di latte, Carciofi, Funghi, Olive taggiasche, Acciughe, Origano', price: "7.50"},
    {id: 9, name: 'Siciliana', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/dwTNl2czilEz40NxmuTN', ingredients: 'Salsa di pomodoro, Mozzarella fior di latte, Acciughe, Capperi di Pantelleria, Olive taggiasche, Origano', price: "6.00"},
  ])
  return (
  
   
    <section className="traditional-pizzas">
      <h1 className="traditional-pizzas-title">Traditional Pizzas</h1>
      <article className="traditional-pizzas-section">

        <ul className="traditional-pizzas-list">
          {cardsPizza.map(pizza=> <li key={pizza.id}><PizzaCard
           imageUrl={pizza.imageUrl}
           name={pizza.name}
           ingredients={pizza.ingredients}
           price={pizza.price}
           /></li>)}
        </ul>
      {/* <article className="pizze-tradizionali margherita">
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
       
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/montanara.jpg")}
            alt="img-montanara"
          />
        </article>
        <article className="info">
         
          <h5 className="price">8.00 $</h5>
          <h3 className="pizza-name">Montanara</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella fior di latte , Speck , Brie , Funghi porcini</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali buffala">
       
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/Buffala.jpg")}
            alt="img-buffala"
          />
        </article>
        <article className="info">
         
          <h5 className="price">6.50 $</h5>
          <h3 className="pizza-name">Buffala</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella di bufala d.o.p. , Olio extra vergine di oliva , Basilico</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali chef">
       
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/Chef.jpg")}
            alt="img-chef"
          />
        </article>
        <article className="info">
         
          <h5 className="price">7.50 $</h5>
          <h3 className="pizza-name">Chef</h3>
          <pizza className="description">Mozzarella fior di latte , Salsa di pomodoro , Panna , Funghi , Speck</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali 4stagioni">
       
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/4stagioni,jpg.jpg")}
            alt="img-4stagioni"
          />
        </article>
        <article className="info">
         
          <h5 className="price">7.00 $</h5>
          <h3 className="pizza-name">Quattro Stagioni</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella fior di latte , Prosciutto cotto , Funghi , Carciofi , Olive</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali oasi">
       
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/oasi.jpg")}
            alt="img-oasi"
          />
        </article>
        <article className="info">
         
          <h5 className="price">6.50 $</h5>
          <h3 className="pizza-name">Oasi</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella fior di latte , Salamino piccante , Zola , Olive taggiasche</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali 4formaggi">
       
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/4formaggi.jpg")}
            alt="img-4formaggi"
          />
        </article>
        <article className="info">
         
          <h5 className="price">6.50 $</h5>
          <h3 className="pizza-name">Quattro Formaggi</h3>
          <pizza className="description">Parmigiano , Zola , Salsa di pomodoro , Mozzarella fior di latte , Brie</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali capricciosa">
       
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/Cpricciosa.jpg")}
            alt="img-capricciosa"
          />
        </article>
        <article className="info">
         
          <h5 className="price">7.50 $</h5>
          <h3 className="pizza-name">Capricciosa</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella fior di latte , Carciofi , Funghi , Olive taggiasche </pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article>
      <article className="pizze-tradizionali siciliana">
       
        <article className="img">
          <img
            src={require("../../../pizze tradizionali images/siciliana.jpg")}
            alt="img-margherita"
          />
        </article>
        <article className="info">
         
          <h5 className="price">6.00 $</h5>
          <h3 className="pizza-name">Siciliana</h3>
          <pizza className="description">Salsa di pomodoro , Mozzarella fior di latte , Acciughe , Capperi di Pantelleria , Olive</pizza>
          <Link to="/details/:pizzaId">Add</Link>
        </article>
      </article> */}
      </article>
    </section>
  
  );
};

export default TraditionalPizzas;
