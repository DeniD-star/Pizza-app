import React from "react";
//import Navigation from '../../components/Navigation'
import "./index.css";

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
      <section className="presentation">
        <h3 className="title-info-about">
          The emerging young people of the Pizzeria <span>Pizza is Italy</span>
        </h3>
        <article className="about-us">
          
            <article className="about-francesco-description">
              <h4> Francesco Di Rosa</h4>
              <p className="about-us-paragraph">
              <img
                src={require("./images/francesco.webp")}
                alt="img-neap"
                className="pizza-n-f"
              />
                A Neapolitan pizza with a pronounced and faithful to the cornice
                tradition: it is Francesco Di Rosa's pizza. The curiosity for the
                baking has always been in the blood of Francesco, who has
                abandoned his previous job to devote himself to
                training as a pizza chef. After various experiences around
                Italy, six years ago Francesco decided to open his own
                activity in Sicignano degli Alburni, where he brought and made
                know the Neapolitan pizza. That's where the
                31 years old Francesco takes the ingredients for his pizza:
                local and quality ingredients. With type 0 flour and
                indirect doughs, simple ingredients and a lot of passion,
                Francesco tries to bring all the flavors of his to customers
                mountain village, reinventing itself every day. A pizza yes
                faithful to tradition, but without neglecting innovation.
              </p>
            </article>
          
            <article className="about-milena-description">
              <h4>Milena Natale</h4>
              <p className="about-us-paragraph">
              <img
                src={require("./images/milena.webp")}
                alt="img-neap"
                className="pizza-n-m"
              />
               Verdevasinicola was born from a dream and from the determination of
                Milena Natale, pizza chef from Caserta who wants to tell the story
                tradition of "pizza a libretto" around Italy with a
                Traveling ape car. Over the years the concept has evolved and has
                led to the opening of stable premises. Today Verdevasinicola yes
                is established at the gates of Cilento. The heart of Verdevasinicola
                the pizza of excellence remains: it is impossible not to try the dough
                special of Milena Natale and savor the scent of
                tradition that meets modernity, all rigorously
                accompanied by the smell of fresh basil. Milena offers a
                refined but traditional cuisine and a pizza closer and closer
                to the flavors of the territory. From the ingredients to the style of
                local, every detail is sought in quality and cared for
                the smallest details. It is amazing to see the energy that Milena,
                mother of two girls, female pizza maker, "female" - like her yes
                describes on his website online - he takes in carrying every day
                passion in the dishes and in the dining room.
              </p>
            </article>
          </article>
      
      </section>
      <section className="contacts">
      </section>
    </>
  );
};

export default HomePage;
