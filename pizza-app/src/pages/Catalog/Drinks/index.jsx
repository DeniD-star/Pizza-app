import React from 'react';
import './index.css';

const Drinks = () => {
  return (
    <section className="drinks">
      <article className="drink-article">
        <article className="img-drink">
            <img src={require("../../../Drinks/water.webp")} alt="wather-img" className="wather-img"/>
        </article>
        <article className="info-drink">
            <h4 className="drink-price">1.00 $</h4>
            <h3 className="drink-name">Wather</h3>
           
            <button className="add-drink">ADD</button>
        </article>
      </article>
      <article className="drink-article">
        <article className="img-drink">
            <img src={require("../../../Drinks/Coca-Cola-500-ml.jpg")} alt="coca-cola-img" className="coca-cola-img"/>
        </article>
        <article className="info-drink">
            <h4 className="drink-price">2.50 $</h4>
            <h3 className="drink-name">Coca-cola</h3>
            
            <button className="add-drink">ADD</button>
        </article>
      </article>
      <article className="drink-article">
        <article className="img-drink">
            <img src={require("../../../Drinks/fanta.jpeg")} alt="fanta-img" className="fanta-img"/>
        </article>
        <article className="info-drink">
            <h4 className="drink-price">2.50 $</h4>
            <h3 className="drink-name">Fanta</h3>
           
            <button className="add-drink">ADD</button>
        </article>
      </article>
      <article className="drink-article">
        <article className="img-drink">
            <img src={require("../../../Drinks/айран.jpg")} className="airan-img"/>
        </article>
        <article className="info-drink">
            <h4 className="drink-price">1.80 $</h4>
            <h3 className="drink-name">Airan</h3>
           
            <button className="add-drink">ADD</button>
        </article>
      </article>
      <article className="drink-article">
        <article className="img-drink">
            <img src={require("../../../Drinks/birra.png")} alt="birra-img" className="birra-img"/>
        </article>
        <article className="info-drink">
            <h4 className="drink-price">2.00 $</h4>
            <h3 className="drink-name">Beer</h3>
           
            <button className="add-drink">ADD</button>
        </article>
      </article>
    </section>
  )
}

export default Drinks;