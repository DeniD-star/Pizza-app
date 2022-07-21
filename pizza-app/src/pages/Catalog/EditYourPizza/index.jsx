import React from 'react'
import './index.css';

const EditYourPizza = () => {
  return (
    <section id="edit-pizza" className="auth">
    <form id="edit">
      <div className="container">
        <h1>Edit Your Pizza</h1>
        <label htmlFor="title-pizza">Pizza name:</label>
        <input
          type="text"
          id="title-pizza"
          name="name"
          placeholder="Enter pizza name..."
        />
        <label htmlFor="pizza-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Upload a photo..."
        />
        {/* <fieldset>
        <legend>Select the type of pizza</legend>
        <div>
          <input
            type="radio"
            id="traditionl-p"
            name="traditional-p"
            value="traditional pizza"
            checked
          />
          <label for="traditional-p">Traditional Pizza</label>
        </div>
        <div>
          <input
            type="radio"
            id="white-p"
            name="white-p"
            value="white pizza"
          />
          <label for="white-p">White Pizza</label>
        </div>
      </fieldset> */}
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
          max={12}
          placeholder={4}
        />
        <span>$</span>
        <input className="btn submit" type="submit" value="EDIT" />
      </div>
    </form>
  </section>
  
  )
}

export default EditYourPizza;