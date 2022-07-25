import React from 'react';
import PizzaCard from '../../PizzaCard';
import './index.css';


const MyPizzas = () => {
    const pizzas = [
        { id: 0, name: "Name", imageUrl:'https://www.kuokko.com/it/webservice/restaurant/get_image/11/61rAHinjJq4Op5bDaQ9I', ingredients:'Salsa di pomodoro , Mozzarella fior di latte , Olio extra vergine di oliva , Basilico', price: '4.50'}
      ];
  return (
    <section className="my-pizzas-profile">
         <h1 className="profile-heading">Here are pizzas created by you!</h1>
      <article className="section-article">
      <ul className="my-pizzas-list">
          {pizzas.map(pizza=> <li key={pizza.id}><PizzaCard
           imageUrl={pizza.imageUrl}
           name={pizza.name}
           ingredients={pizza.ingredients}
           price={pizza.price}
           /></li>)}
        </ul>
      </article> 
    </section>
  )
}

export default MyPizzas;