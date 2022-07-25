import React, { useState } from 'react'
import PizzaCard from '../../PizzaCard';
import './index.css';

const Desserts = () => {
  const[desserts, setDesserts] = useState([
    {id: 0, name: 'Crostata alla nutella', imageUrl: 'https://www.kuokko.com/it/webservice/restaurant/get_image/11/xUK3QkDENTMNW8LdXxDK', price: '3.00', ingredients: 'Homemade soft and creamy Nutella tart for you.'},
    {id: 1, name: 'New York Cheesecake', imageUrl: 'https://www.giallozafferano.it/images/175-17503/New-York-Cheesecake_650x433_wm.jpg', price: '5.00', ingredients: 'Garnished with the typical berry sauce. Homemade for you.'}
  ])
  return (
    <section className="desserts">
        <article className="dessert-article">
        <ul className="desserts-list">
          {desserts.map(dessert=> <li key={dessert.id}><PizzaCard
           imageUrl={dessert.imageUrl}
           name={dessert.name}
          ingredients={dessert.ingredients}
           price={dessert.price}
           /></li>)}
        </ul>
          {/* <article className="img-dessert">
              <img src={require("../../../DessertsImages/crostata alla Nutella.jpg")} alt="dessert-img" className="dessert-img"/>
          </article>
          <article className="info-dessert">
              <h4 className="dessert-price">3.00 $</h4>
              <h3 className="dessert-name">CROSTATA ALLA NUTELLA</h3>
              <p className="description">Homemade soft and creamy Nutella tart for you.</p>
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
          </article> */}
        </article>
       
      </section>
  )
}

export default Desserts;