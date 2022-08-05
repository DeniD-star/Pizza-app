import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PizzaCard from "../../ClientsCatalog/PizzaCard";
import * as pizzaService from '../../../services/pizzaService';
import "./index.css";

const WhitePizzas = () => {



  const [pizzaItem, setPizzaItem] = useState([])
  
  useEffect(()=>{
       pizzaService.getAll()
       .then(result=>{
         result= result.filter(p=> p.type === 'white');
         setPizzaItem(result)
       })      
  }, [])

  // const whitepizzas = [
  //   {
  //     _id: 0,
  //     name: "Delicata",
  //     imageUrl:
  //       "https://www.kuokko.com/it/webservice/restaurant/get_image/11/fO96Xtj5hthvOKHyhMXe",
  //     ingredients:
  //       "Mozzarella fior di latte, Spinaci, Zucchine, Funghi porcini",
  //     price: "8.00",
  //   },
  //   {
  //     _id: 1,
  //     name: "Partenopea",
  //     imageUrl:
  //       "https://www.kuokko.com/it/webservice/restaurant/get_image/11/kdPOsMKT3Gnhz7zhGnaA",
  //     ingredients:
  //       "Pomodorini salsati interi, Mozzarella di bufala d.o.p., Basilico",
  //     price: "7.00",
  //   },
  //   {
  //     _id: 2,
  //     name: "Primavera",
  //     imageUrl:
  //       "https://www.kuokko.com/it/webservice/restaurant/get_image/11/KVvnJ5vbzTNKwyUwBVxQ",
  //     ingredients:
  //       "Mozzarella fior di latte, Pomodorini, Rucola, Scaglie di parmigiano, Prosciutto crudo",
  //     price: "8.00",
  //   },
  //   {
  //     _id: 3,
  //     name: "Regina",
  //     imageUrl:
  //       "https://www.kuokko.com/it/webservice/restaurant/get_image/11/DxTmVCJkOwGE0nwDRrxK",
  //     ingredients: "Mozzarella di bufala d.o.p., Pomodorini, Basilico",
  //     price: "7.00",
  //   },
  //   {
  //     _id: 4,
  //     name: "Saporita",
  //     imageUrl:
  //       "https://www.kuokko.com/it/webservice/restaurant/get_image/11/6HR0OAve6t6WcFaSWoRw",
  //     ingredients:
  //       "Mozzarella fior di latte, Funghi, Salsiccia, Scamorza, Peperoncino",
  //     price: "6.50",
  //   },
  //   {
  //     _id: 5,
  //     name: "Spaccanapoli",
  //     imageUrl:
  //       "https://www.kuokko.com/it/webservice/restaurant/get_image/11/00f9c18c6ee3c45350fd6c4d147d9e49",
  //     ingredients:
  //       "Mozzarella fior di latte, Patate novelle al forno, Porchetta, Funghi",
  //     price: "7.50",
  //   },
  //   {
  //     _id: 6,
  //     name: "Tokyo",
  //     imageUrl:
  //       "https://www.kuokko.com/it/webservice/restaurant/get_image/11/ZZRm2RVCo4TZNs6E7Ino",
  //     ingredients: "Prosciutto cotto, Funghi, Salsiccia, Panna",
  //     price: "7.50",
  //   },
  //   {
  //     _id: 7,
  //     name: "Vagdo",
  //     imageUrl:
  //       "https://www.kuokko.com/it/webservice/restaurant/get_image/11/hhG8HwDCNDUpK0pRupa8",
  //     ingredients:
  //       "Mozzarella fior di latte, Patate novelle al forno, Brie, Pesto fatto in casa, Porchetta",
  //     price: "8.50",
  //   },
  //];

  return (
    <section className="white-pizzas">
      <h1 className="white-pizzas-title">White Pizzas</h1>
      <article className="white-pizzas-section">
        <ul className="white-pizzas-list">
          {pizzaItem.length > 0 && pizzaItem.map((pizza) => (
            <li key={pizza._id}>
              <PizzaCard
                pizza={pizza}
              />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default WhitePizzas;
