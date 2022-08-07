import React, { useState, useEffect } from "react";
import DessertItem from "../../../components/DessertItem";
//import PizzaCard from "../../ClientsCatalog/PizzaCard";
import * as pizzaService from '../../../services/pizzaService';
import "./index.css";

const Desserts = () => {
  const [desserts, setDesserts] = useState([]);


  useEffect(()=>{
    pizzaService.getAll()
    .then(result=>{
      result= result.filter(p=> p.type === 'dessert');
      setDesserts(result)
    })      
}, [])
  return (
    <section className="desserts">
      <h1 className="desserts-title">DESSERTS</h1>
     
      <ul className="desserts-list">
        {desserts.length> 0 && desserts.map((dessert) => (
          <li key={dessert._id}>
            <DessertItem
              imageUrl={dessert.imageUrl}
              name={dessert.name}
              notes={dessert.notes}
              price={dessert.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Desserts;
