import React from "react";
import { useState, useContext } from "react";
import PizzaCard from "../../ClientsCatalog/PizzaCard";
import  * as pizzaService from '../../../services/pizzaService';
import { PizzaContext, PizzaProvider } from "../../../context/pizzaContext";
import './index.css';
import { useEffect } from "react";


const TraditionalPizzas = () => {
  // const {pizzas} = useContext(PizzaContext);
   const [pizzaItem, setPizzaItem] = useState([])
  
   useEffect(()=>{
        pizzaService.getAll()
        .then(result=>{
          result = result.length > 0 && result.filter(p=> p.type === 'traditional');
          setPizzaItem(result)
        })      
   }, [])
 
  return (
  
   
    <section className="traditional-pizzas">
      <h1 className="traditional-pizzas-title">Traditional Pizzas</h1>
      <article className="traditional-pizzas-section">

        <ul className="traditional-pizzas-list">
          {pizzaItem.length > 0 && pizzaItem.map(pizza=> <li key={pizza._id}><PizzaCard
          pizza={pizza}/></li>) }
        </ul>
      </article>
    </section>
  
  );
          }
export default TraditionalPizzas;



  // { "name": "Margherita", "type": "traditional", "imageUrl": "https://www.kuokko.com/it/webservice/restaurant/get_image/11/61rAHinjJq4Op5bDaQ9I", "ingredients": "Salsa di pomodoro , Mozzarella fior di latte , Olio extra vergine di oliva , Basilico", "price": "4.50", "canBeEdit": "false"},
  // { "name": "Americana", "type": "traditional", "imageUrl": "https://www.kuokko.com/it/webservice/restaurant/get_image/11/JAp0dRGhLUA5wTXmaY40", "ingredients": "Mozzarella fior di latte, Salsa di pomodoro, Wurstel, Patate fritte", "price": "6.50", "canBeEdit": "false"},
  // { "name": "Montanara", "type": "traditional", "imageUrl": "https://www.kuokko.com/it/webservice/restaurant/get_image/11/yipq5N2eRHY7QyegYYZu", "ingredients": "Salsa di pomodoro, Mozzarella fior di latte, Speck, Brie, Funghi porcini", "price": "8.00", "canBeEdit": "false"},
  // {"name" : "Buffala", "type": "traditional",  "imageUrl": "https://www.kuokko.com/it/webservice/restaurant/get_image/11/5qvwFLAiSHr9qfGxIwdt", "ingredients": "Salsa di pomodoro, Mozzarella di bufala d.o.p., Olio extra vergine di oliva, Basilico", "price": "6.50", "canBeEdit": "false"},
  // {"name" : "Chef", "type": "traditional", "imageUrl": "https://www.kuokko.com/it/webservice/restaurant/get_image/11/faaf60a5e638fbcbad16fbab2ca36942", "ingredients": "Mozzarella fior di latte, Salsa di pomodoro, Panna, Funghi, Speck", "price": "7.50", "canBeEdit": "false"},
  // { "name": "Quattro Staggioni", "type": "traditional", "imageUrl": "https://www.kuokko.com/it/webservice/restaurant/get_image/11/tlmZCk3KAtEmJhPigWth", "ingredients": "Salsa di pomodoro, Mozzarella fior di latte, Prosciutto cotto, Funghi, Carciofi, Olive taggiasche", "price": "7.00", "canBeEdit": "false"},
  // { "name": "Oasi", "type": "traditional",  "imageUrl": "https://www.kuokko.com/it/webservice/restaurant/get_image/11/g9kgySKuGwwSFW0lqkfz", "ingredients": "Salsa di pomodoro, Mozzarella fior di latte, Salamino piccante, Zola, Olive taggiasche", "price": "6.50", "canBeEdit": "false"},
  // { "name": "Quattro formaggi", "type": "traditional",  "imageUrl": "https://www.kuokko.com/it/webservice/restaurant/get_image/11/Ook8RijuuLkeI3w5exuE", "ingredients": "Parmigiano, Zola, Salsa di pomodoro, Mozzarella fior di latte, Brie", "price": "6.50", "canBeEdit": "false"},
  // { "name": "Capricciosa", "type": "traditional",  "imageUrl": "https://www.kuokko.com/it/webservice/restaurant/get_image/11/VgCXc6i8HXaGcjoTa6dt", "ingredients": "Salsa di pomodoro, Mozzarella fior di latte, Carciofi, Funghi, Olive taggiasche, Acciughe, Origano", "price": "7.50", "canBeEdit":" false"},
  // {"name" : "Siciliana", "type": "traditional", "imageUrl": "https://www.kuokko.com/it/webservice/restaurant/get_image/11/dwTNl2czilEz40NxmuTN", "ingredients": "Salsa di pomodoro, Mozzarella fior di latte, Acciughe, Capperi di Pantelleria, Olive taggiasche, Origano", "price": "6.00", "canBeEdit": "false"},




//salvo nel server traditianalpizzas, diversi id

//in questo file prendo tuttele pizze nel dataBase e le filtro per tipo, seleziono solo le traditionalpizzas e le salvo nello stato
