import React from 'react'
import { Link } from 'react-router-dom';
import PizzaCard from '../PizzaCard';
import './index.css';
import Myorders from './Myorders';
import Mypizzas from './Mypizzas';




const Profile = (props) => {
 
  return (
    <section className="profile">
      <ul className="nav-menu">
        <li className="list-item-menu">
          <Link
            to={"/my-pizzas-profile"}
            className="link-menu"
            mypizzas={<Mypizzas />}
          >
            MY PIZZAS
          </Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </li>
        <li className="list-item-menu">
          <Link to="/my-orders"
           className="link-menu"
           myorders={<Myorders/>}
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