import React from "react";
import "./index.css";
import { useContext } from "react";
import { PizzaContext } from "../../../context/pizzaContext";
import { useParams, useNavigate } from "react-router-dom";
import * as pizzaService from "../../../services/pizzaService";
import { useEffect, useState } from "react";
import { UserContext} from "../../../context/UserContext";


const EditYourPizza = () => {
  const [editedPizza, setEditedPizza] = useState({});
   const {pizzaEditHandler} = useContext(PizzaContext);
  const { pizzaId } = useParams();
  const { user} = useContext(UserContext);
  const navigate = useNavigate();


 
  useEffect(() => { 
    pizzaService.getOne(pizzaId)
    .then(editedPizza=>{
      if( user._id !== editedPizza._ownerId){
        navigate('/404');
      }
      setEditedPizza(editedPizza);
    })
  }, [user]);


  const onSubmit = (e) => {
    e.preventDefault();


    
    const pizzaData = Object.fromEntries(new FormData(e.target));
    pizzaData.type = editedPizza.type;
    pizzaData.canBeEdit= editedPizza.canBeEdit;
    pizzaData._ownerId = editedPizza._ownerId;
    pizzaData._id = editedPizza._id;
    pizzaData._createdOn = editedPizza._createdOn;


  
   
    pizzaService.edit(pizzaId, pizzaData)
    .then((dataResult) => {
      pizzaEditHandler(pizzaId, dataResult)
      navigate(`/details/${pizzaId}`)
    });

   
  }

  return (
    <section id="edit-editedPizza" className="auth">
      <form id="edit" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Your Pizza</h1>
          <label htmlFor="title-editedPizza">Pizza name:</label>
          <input
            type="text"
            id="title-editedPizza"
            name="name"
            placeholder="Enter editedPizza name..."
            defaultValue={editedPizza.name}
          />
          <label htmlFor="editedPizza-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            defaultValue={editedPizza.imageUrl}
          />
          <label htmlFor="ingredients">Your Ingredients</label>
          <textarea
            type="text"
            id="ingredients"
            name="ingredients"
            placeholder="Enter your ingredients..."
            rows={30}
            cols={30}
            defaultValue={editedPizza.ingredients}
          />
          <label htmlFor="notes">Notes:</label>
          <textarea
            name="notes"
            id="notes"
            rows={30}
            cols={30}
            defaultValue={editedPizza.notes}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            min={4}
            max={30}
            placeholder={4}
            defaultValue={editedPizza.price}
          />
          <span>$</span>
          <input className="btn submit" type="submit" value="EDIT" />
        </div>
      </form>
    </section>
  );
};

export default EditYourPizza;
