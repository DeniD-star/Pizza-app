import React from "react";
//import Navigation from '../../components/Navigation'
import "./index.css";
import Contacts from '../Contacts';
import AboutUs from '../AboutUs';
import OurProducts from '../OurProducts';

const HomePage = () => {
  return (
    <>
      <section className="home-page">
        <article className="title">
          <h1 class="main-title">
            Welcome lovers of <span class="lovers-pizza">pizza</span>
          </h1>
          <h3 class="subtitle">
            <span class="just-at">...with the first bite </span> ... you'll find
            yourself in Italy
          </h3>
        </article>
        <p className="welcome-btn-paragraph">
          Consult our menu and place your order
        </p>
        <button className="home-prenota">Make Your Order</button>
      </section>
     <OurProducts/>
      <AboutUs/>
     <Contacts/>
    </>
  );
};

export default HomePage;