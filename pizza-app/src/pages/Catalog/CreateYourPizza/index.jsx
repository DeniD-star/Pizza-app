import React from 'react'
import './index.css';
import { useState } from 'react';


const CreateYourPizza = () => {
 
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIingredients] = useState('');
  const [notes, setNotes] = useState('');
  const [price, setPrice] = useState('');
 

  const onSubmit = (e)=>{
      e.preventDefault();
     let  isValidForm = true;

     const regex = /^(http|https):\/\/[^ "]+$/

    if(!regex.test(image)){

        setError('Image have not valid url!')
    }

    if(!name){
      setError('Name is required!')
    }

    if(!ingredients){
      setError('Ingredients are required!')
    }else if(ingredients.length <= 10){
      setError('Ingredients must be more than 10 characters long!')
    }

    if(!price){
      setError('Price is required!')
    }else if(price < 4){
      setError('Value must be grater or equal to 4!')
    }


  }





  return (
    <section id="create-pizza" className="auth">
    <form id="create" onSubmit={onSubmit}>
      <div className="container">
        <h1>Create Your Pizza</h1>
        <label htmlFor="title-pizza">Pizza name:</label>
        <input
          type="text"
          id="title-pizza"
          name="name"
          placeholder="Enter pizza name..."
          onChange={(e)=>setName(e.target.value)}
          value={name}
        />
        <label htmlFor="pizza-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Upload a photo..."
          onChange={(e)=>setImage(e.target.value)}
          value={image}
        />
        <label htmlFor="ingredients">Your Ingredients</label>
        <textarea
          type="text"
          id="ingredients"
          name="ingredients"
          placeholder="Enter your ingredients..."
          rows={30}
          cols={30}
          defaultValue={"          "}
        />
        
        <label htmlFor="notes">Notes:</label>
        <textarea name="notes" id="notes" rows={30} cols={30} defaultValue={""} />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          min={4}
         
          placeholder={4}
        />
        <span>$</span>
        {error && error}
        <input className="btn submit" type="submit" value="CREATE" />
      </div>
    </form>
  </section>
  
  )
}

export default CreateYourPizza;