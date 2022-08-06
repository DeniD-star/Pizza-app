import React from "react";
import { useState, useContext } from "react";
import PizzaCard from "../../ClientsCatalog/PizzaCard";
import  * as pizzaService from '../../../services/pizzaService';
import './index.css';
import { useEffect } from "react";


const TraditionalPizzas = () => {
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



  

