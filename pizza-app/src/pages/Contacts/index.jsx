import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <section className="contacts">
    <article className="open-hours">
      <h2>WHEN YOU FIND US</h2>
      <ul className="day-of-week">
        <li className="day-li"><strong>MONDAY:</strong>   CLOSE</li>
        <li className="day-li"><strong>TUESDAY:</strong>   15:00 - 22:00</li>
        <li className="day-li"><strong>WEDNESDAY:</strong>   15:00 - 22:00</li>
        <li className="day-li"><strong>THURSDAY:</strong>   15:00 - 22:00</li>
        <li className="day-li"><strong>FRIDAY:</strong>   15:00 - 22:00</li>
        <li className="day-li"><strong>SATURDAY:</strong>   15:00 - 22:00</li>
        <li className="day-li"><strong>SUNDAY:</strong>   15:00 - 22:00</li>
      </ul>
    </article>
    <article className="our-contacts">
    <h2>TO CONTACT US</h2>
    <h4>Pizza is Italy</h4>
    <ul className="day-of-week">
        <li className="day-li">Piazza A. Greppi, 2D</li>
        <li className="day-li">20060 - Cassina de' Pecchi (MI)</li>
        <li className="day-li"> <i className="fa-solid fa-phone"></i>3489555202 - <i className="fa-solid fa-envelope"></i>yourpizzaservice@gmail.com</li> 
      </ul>
    </article>
    <article className="seguici">
    <h2>FOLLOW US</h2>
    
    <ul className="nav-seguici">
       <li className="segici-item"><Link to="##"><i className="fa-brands fa-facebook-f"></i></Link></li>
       <li className="segici-item"><Link to="##"><i className="fa-brands fa-twitter"></i></Link></li>
       <li className="segici-item"><Link to="##"><i className="fa-brands fa-instagram"></i></Link></li>
       <li className="segici-item"><Link to="##"><i className="fa-brands fa-youtube"></i></Link></li>
      </ul>
    </article>
  </section>
  )
}

export default Contacts