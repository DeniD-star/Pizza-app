import React from "react";
import "./index.css";
import { useContext } from "react";
import { PizzaContext } from "../../../context/pizzaContext";
import { useParams, useNavigate } from "react-router-dom";
import * as pizzaService from "../../../services/pizzaService";
import { useEffect, useState } from "react";

const EditYourPizza = () => {
  const [pizza, setPizza] = useState({});
   const {pizzaEditHandler} = useContext(PizzaContext);
  const { pizzaId } = useParams();
  const navigate = useNavigate();

  useEffect(() => { //po tozi na4in vzimame poslednoto copie koeto e editnato, nqma na4in da napravim gre6ka, dokato ako e prez kontexta ima opasnost nqkoi da doide, da go smeni i ne6to da se oburka, a s useEffect (i po konkretno sus zaqvka)se osigurqvame 
    pizzaService.getOne(pizzaId)
    .then(pizzaData=>{
      setPizza(pizzaData)
    })
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    // let isValidForm = true;
    
    const pizzaData = Object.fromEntries(new FormData(e.target));
    pizzaService.edit(pizzaId, pizzaData)
    .then((dataResult) => {
      pizzaEditHandler(pizzaId, dataResult)
      console.log(dataResult);
      navigate(`/details/${pizzaId}`)
    });

  }

  return (
    <section id="edit-pizza" className="auth">
      <form id="edit" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Your Pizza</h1>
          <label htmlFor="title-pizza">Pizza name:</label>
          <input
            type="text"
            id="title-pizza"
            name="name"
            placeholder="Enter pizza name..."
            defaultValue={pizza.name}
          />
          <label htmlFor="pizza-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            defaultValue={pizza.imageUrl}
          />
          <label htmlFor="ingredients">Your Ingredients</label>
          <textarea
            type="text"
            id="ingredients"
            name="ingredients"
            placeholder="Enter your ingredients..."
            rows={30}
            cols={30}
            defaultValue={pizza.ingredients}
          />
          <label htmlFor="notes">Notes:</label>
          <textarea
            name="notes"
            id="notes"
            rows={30}
            cols={30}
            defaultValue={pizza.notes}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            min={4}
            max={30}
            placeholder={4}
            defaultValue={pizza.price}
          />
          <span>$</span>
          <input className="btn submit" type="submit" value="EDIT" />
        </div>
      </form>
    </section>
  );
};

export default EditYourPizza;
