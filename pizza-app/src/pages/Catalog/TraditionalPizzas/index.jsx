import React, { useState } from "react";
import { Link } from "react-router-dom";
import PizzaCard from "../../ClientsCatalog/PizzaCard";
import './index.css';


const TraditionalPizzas = () => {

  const traditionalpizzas= [
    {_id: 0, name: 'Margherita', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/61rAHinjJq4Op5bDaQ9I', ingredients: 'Salsa di pomodoro , Mozzarella fior di latte , Olio extra vergine di oliva , Basilico', price: "4.50"},
    {_id: 1, name: 'Americana', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/JAp0dRGhLUA5wTXmaY40', ingredients: 'Mozzarella fior di latte, Salsa di pomodoro, Wurstel, Patate fritte', price: "6.50"},
    {_id: 2, name: 'Montanara', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/yipq5N2eRHY7QyegYYZu', ingredients: 'Salsa di pomodoro, Mozzarella fior di latte, Speck, Brie, Funghi porcini', price: "8.00"},
    {_id: 3, name: 'Buffala', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/5qvwFLAiSHr9qfGxIwdt', ingredients: 'Salsa di pomodoro, Mozzarella di bufala d.o.p., Olio extra vergine di oliva, Basilico', price: "6.50"},
    {_id: 4, name: 'Chef', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/faaf60a5e638fbcbad16fbab2ca36942', ingredients: 'Mozzarella fior di latte, Salsa di pomodoro, Panna, Funghi, Speck', price: "7.50"},
    {_id: 5, name: 'Quattro Staggioni', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/tlmZCk3KAtEmJhPigWth', ingredients: 'Salsa di pomodoro, Mozzarella fior di latte, Prosciutto cotto, Funghi, Carciofi, Olive taggiasche', price: "7.00"},
    {_id: 6, name: 'Oasi', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/g9kgySKuGwwSFW0lqkfz', ingredients: 'Salsa di pomodoro, Mozzarella fior di latte, Salamino piccante, Zola, Olive taggiasche', price: "6.50"},
    {_id: 7, name: 'Quattro formaggi', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/Ook8RijuuLkeI3w5exuE', ingredients: 'Parmigiano, Zola, Salsa di pomodoro, Mozzarella fior di latte, Brie', price: "6.50"},
    {_id: 8, name: 'Capricciosa', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/VgCXc6i8HXaGcjoTa6dt', ingredients: 'Salsa di pomodoro, Mozzarella fior di latte, Carciofi, Funghi, Olive taggiasche, Acciughe, Origano', price: "7.50"},
    {_id: 9, name: 'Siciliana', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/dwTNl2czilEz40NxmuTN', ingredients: 'Salsa di pomodoro, Mozzarella fior di latte, Acciughe, Capperi di Pantelleria, Olive taggiasche, Origano', price: "6.00"},
  ];
  return (
  
   
    <section className="traditional-pizzas">
      <h1 className="traditional-pizzas-title">Traditional Pizzas</h1>
      <article className="traditional-pizzas-section">

        <ul className="traditional-pizzas-list">
          {traditionalpizzas.map(pizza=> <li key={pizza._id}><PizzaCard
          pizza={pizza}/></li>)}
        </ul>
      </article>
    </section>
  
  );
};

export default TraditionalPizzas;
