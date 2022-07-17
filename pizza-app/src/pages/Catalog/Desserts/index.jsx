import React from 'react'
import './index.css';

const Desserts = () => {
  return (
    <section className="desserts">
        <article className="dessert-article">
          <article className="img-dessert">
              <img src={require("../../../DessertsImages/crostata alla Nutella.jpg")} alt="dessert-img" className="dessert-img"/>
          </article>
          <article className="info-dessert">
              <h4 className="dessert-price">3.00 $</h4>
              <h3 className="dessert-name">CROSTATA ALLA NUTELLA</h3>
             
              <button className="add-dessert">ADD</button>
          </article>
        </article>
        <article className="dessert-article">
          <article className="img-dessert">
              <img src={require("../../../DessertsImages/New-York-Cheesecake_600x500.webp")} alt="dessert-img" className="dessert-img"/>
          </article>
          <article className="info-dessert">
              <h4 className="dessert-price">5.00 $</h4>
              <h3 className="dessert-name">CHEESECAKE NEW YORK</h3>
             
              <button className="add-dessert">ADD</button>
          </article>
        </article>
       
      </section>
  )
}

export default Desserts;