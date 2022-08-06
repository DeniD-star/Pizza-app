import React, { useState, useEffect } from "react";
import DessertItem from "../../../components/DessertItem";
//import PizzaCard from "../../ClientsCatalog/PizzaCard";
import * as pizzaService from '../../../services/pizzaService';
import "./index.css";

const Desserts = () => {
  const [desserts, setDesserts] = useState([
    // {
    //   id: 0,
    //   name: "Crostata alla nutella",
    //   imageUrl:
    //     "https://www.kuokko.com/it/webservice/restaurant/get_image/11/xUK3QkDENTMNW8LdXxDK",
    //   price: "3.00",
    //   notes: "Homemade soft and creamy Nutella tart for you.",
    // },
    // {
    //   id: 1,
    //   name: "New York Cheesecake",
    //   imageUrl:
    //     "https://www.giallozafferano.it/images/175-17503/New-York-Cheesecake_650x433_wm.jpg",
    //   price: "5.00",
    //   notes: "Garnished with the typical berry sauce. Homemade for you.",
    // },
  ]);


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
          <li key={dessert.id}>
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
