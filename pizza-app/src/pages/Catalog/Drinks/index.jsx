import React, { useState, useEffect } from "react";
import DrinkItem from "../../../components/DrinkItem"; 
import * as pizzaService from '../../../services/pizzaService';
import "./index.css";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);


  useEffect(()=>{
    pizzaService.getAll()
    .then(result=>{
      result= result.filter(p=> p.type === 'drinks');
      setDrinks(result)
    })      
}, [])
  return (
    <section className="drinks">
       <h1 className="drinks-title">DRINKS</h1>
      <ul className="drinks-list">
        {drinks.length > 0 && drinks.map((drink) => (
          <li key={drink._id}>
            <DrinkItem
              imageUrl={drink.imageUrl}
              name={drink.name}
              notes={drink.notes}
              price={drink.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Drinks;
