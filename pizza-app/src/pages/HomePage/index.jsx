import React from "react";
import "./index.css";
import Contacts from '../Contacts';
import AboutUs from '../AboutUs';
import OurProducts from '../OurProducts';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="home-page">
        <article className="title">
          <h1 className="main-title">
            Welcome lovers of <span className="lovers-pizza">pizza</span>
          </h1>
          <h3 className="subtitle">
            <span className="just-at">...with the first bite </span> ... you'll find
            yourself in Italy
          </h3>
        </article>
        <p className="welcome-btn-paragraph">
          Consult our menu and place your order
        </p>
        <Link to='/catalog' className="home-prenota">Make Your Order</Link>
      </section>
     <OurProducts/>
      <AboutUs/>
     <Contacts/>
     
    </>
  );
};

export default HomePage;
