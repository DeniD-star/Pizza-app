import React from 'react'
import "./index.css";

const OurProducts = () => {
  return (
    <section className="our-products">
    <h2 className="title-ingredienti">Freshest ingredients</h2>
    <article className="articles-ingredienti">
      <article className="ingredients-description img">
        <img
          src={require("./images/mozzarella-di-bufala-ricette.jpg")}
          alt="mozzarela"
        />
      </article>
      <article className="ingredients-description info">
        <h3>QUALITY</h3>
        <p>
          When you want to make a really good pizza, the choice can only
          fall on high quality ingredients. The reason? Well, it's simple:
          it is precisely the ingredients that form the main framework of
          the pizza and give it that exquisite flavor that distinguishes it
          from any pizza.
        </p>
      </article>
      <article className="ingredients-description img">
        <img src={require("./images/pomodoro-4.jpg")} alt="pomodoro" />
      </article>
      <article className="ingredients-description info">
        <h3>GENUINENESS</h3>
        <p>
          Everything starts from a simple recipe, however studied in every
          detail in order to achieve our goal: to offer a healthy, tasty and
          digestible pizza, ready to conquer each of our customers with its
          genuineness.
        </p>
      </article>
      <article className="ingredients-description img">
        <img
          src={require("./images/for article.jpg")}
          alt="img-made-in-Italy"
        />
      </article>
      <article className="ingredients-description info">
        <h3>MADE IN ITALY</h3>
        <p>
          We believe in the traditions and genuineness of Made in Italy
          products. Our values ​start from the ingredients: Italian, very
          fresh and of the highest quality. We are a country rich in scents
          and colors, our mastery lies in putting them on your plate.
        </p>
      </article>
    </article>
  </section>
  )
}

export default OurProducts;