import React from 'react'
import { Link } from 'react-router-dom';
import PizzaCard from '../PizzaCard';
import './index.css';
import MyOrders from './MyOrders';
import MyPizzas from './MyPizzas';




const Profile = (props) => {
 
  return (
    <section className="profile">
      <ul className="nav-menu">
        <li className="list-item-menu">
          <Link
            to={"/my-pizzas-profile"}
            className="link-menu"
            myPizzas={<MyPizzas />}
          >
            MY PIZZAS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
        <li className="list-item-menu">
          <Link to="/my-orders"
           className="link-menu"
           myOrders={<MyOrders/>}
           >
            MY ORDERS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
        </ul>
     
    </section>
  )
}

export default Profile;