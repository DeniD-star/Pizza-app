import React, { useState, useEffect } from "react";
import DrinkItem from "../../../components/DrinkItem"; 
import * as pizzaService from '../../../services/pizzaService';
import "./index.css";

const Drinks = () => {
  const [drinks, setDrinks] = useState([
    // {
    //   id: 0,
    //   name: "Wather",
    //   imageUrl:
    //     "https://efabcatering.com/wp-content/uploads/2021/05/Water-050cl.jpg",
    //   price: "1.00",
    //   notes: "0.5l; Plastic bottle.",
    // },
    // {
    //   id: 1,
    //   name: "Coca-cola",
    //   imageUrl:
    //     "https://supplies-eu.com/wp-content/uploads/2021/05/Coca-Cola-500-ml.jpg",
    //   price: "2.50",
    //   notes: "0.5l; Plastic bottle.",
    // },
    // {
    //   id: 2,
    //   name: "Fanta",
    //   imageUrl:
    //     "https://i.ebayimg.com/images/g/850AAOSwm-Fb8H5F/s-l500.jpg",
    //   price: "2.50",
    //   notes: "0.5l; Plastic bottle.",
    // },
    // {
    //   id: 3,
    //   name: "Airan",
    //   imageUrl:
    //     "http://cdn.shopify.com/s/files/1/0562/6439/2727/products/bio-green-drinking-yogurt-lassi-ayran-500ml.jpg?v=1643309777",
    //   price: "1.80",
    //   notes: "0.5l;  Bulgarian product. Amazing taste.",
    // },
    // {
    //   id: 4,
    //   name: "Beer",
    //   imageUrl:
    //     "https://glassbottles.co.uk/wp-content/uploads/2017/07/500ml-Clear-Cider-Bottle-w-Label.jpg",
    //   price: "2.00",
    //   notes: "0.5l; 4.5%-alc; British product.",
    // },
  ]);


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
      {/* <article className="drink-article">
        <article className="img-drink">
          <img
            src={require("../../../Drinks/water.webp")}
            alt="wather-img"
            className="wather-img"
          />
        </article>
        <article className="info-drink">
          <h4 className="drink-price">1.00 $</h4>
          <h3 className="drink-name">Wather</h3>

          <button className="add-drink">ADD</button>
        </article>
      </article>
      <article className="drink-article">
        <article className="img-drink">
          <img
            src={require("../../../Drinks/Coca-Cola-500-ml.jpg")}
            alt="coca-cola-img"
            className="coca-cola-img"
          />
        </article>
        <article className="info-drink">
          <h4 className="drink-price">2.50 $</h4>
          <h3 className="drink-name">Coca-cola</h3>

          <button className="add-drink">ADD</button>
        </article>
      </article>
      <article className="drink-article">
        <article className="img-drink">
          <img
            src={require("../../../Drinks/fanta.jpeg")}
            alt="fanta-img"
            className="fanta-img"
          />
        </article>
        <article className="info-drink">
          <h4 className="drink-price">2.50 $</h4>
          <h3 className="drink-name">Fanta</h3>

          <button className="add-drink">ADD</button>
        </article>
      </article>
      <article className="drink-article">
        <article className="img-drink">
          <img
            src={require("../../../Drinks/айран.jpg")}
            className="airan-img"
          />
        </article>
        <article className="info-drink">
          <h4 className="drink-price">1.80 $</h4>
          <h3 className="drink-name">Airan</h3>

          <button className="add-drink">ADD</button>
        </article>
      </article>
      <article className="drink-article">
        <article className="img-drink">
          <img
            src={require("../../../Drinks/birra.png")}
            alt="birra-img"
            className="birra-img"
          />
        </article>
        <article className="info-drink">
          <h4 className="drink-price">2.00 $</h4>
          <h3 className="drink-name">Beer</h3>

          <button className="add-drink">ADD</button>
        </article> */}
      {/* </article> */}
    </section>
  );
};

export default Drinks;
