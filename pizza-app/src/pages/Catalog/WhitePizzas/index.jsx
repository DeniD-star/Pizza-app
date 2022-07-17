import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const WhitePizzas = () => {
  return (
    <section className="white-pizzas">
      <article className="pizze-bianche delicata">
        <article className="img">
          <img
            src={require("../../../pizze bianche images/delicata.jpg")}
            alt="img-delicata"
          />
        </article>
        <article className="info">
            <h5 className="price">8.00 $</h5>
          <h3 className="pizza-name">Delicata</h3>
          <pizza className="description">Mozzarella fior di latte , Spinaci , Zucchine , Funghi porcini</pizza>
          <Link to="/pizza-delicata/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche partenopea">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/partenopea.jpg")}
            alt="img-partenopea"
          />
        </article>
        <article className="info">
        <h5 className="price">7.00 $</h5>
          <h3 className="pizza-name">Partenopea</h3>
          <pizza className="description">Pomodorini salsati interi , Mozzarella di bufala d.o.p. , Basilico</pizza>
          <Link to="/pizza-partenopea/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche primavera">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/primavera.jpg")}
            alt="img-primavera"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">8.00 $</h5>
          <h3 className="pizza-name">Primavera</h3>
          <pizza className="description">Mozzarella fior di latte , Pomodorini , Rucola , Scaglie di parmigiano , Prosciutto</pizza>
          <Link to="/pizza-primavera/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche regina">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/regina.jpg")}
            alt="img-regina"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">7.00 $</h5>
          <h3 className="pizza-name">Regina</h3>
          <pizza className="description">Mozzarella di bufala d.o.p. , Pomodorini , Basilico</pizza>
          <Link to="/pizza-regina/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche saporita">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/saporita.jpg")}
            alt="img-saporita"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">6.50 $</h5>
          <h3 className="pizza-name">Saporita</h3>
          <pizza className="description">Mozzarella fior di latte , Funghi , Salsiccia , Scamorza , Peperoncino</pizza>
          <Link to="/pizza-saporita/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche spaccanapoli">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/spaccanapoli.jpg")}
            alt="img-4stagioni"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">7.50 $</h5>
          <h3 className="pizza-name">SpaccaNapoli</h3>
          <pizza className="description">Mozzarella fior di latte , Patate novelle al forno , Porchetta , Funghi</pizza>
          <Link to="/pizza-spaccanapoli/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche tokyo">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/Tokyo.jpg")}
            alt="img-tokyo"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">7.50 $</h5>
          <h3 className="pizza-name">Tokyo</h3>
          <pizza className="description">Prosciutto cotto , Funghi , Salsiccia , Panna</pizza>
          <Link to="/pizza-tokyo/more">Add</Link>
        </article>
      </article>
      <article className="pizze-bianche vagdo">
        {" "}
        <article className="img">
          <img
            src={require("../../../pizze bianche images/Vagdo.jpg")}
            alt="img-vagdo"
          />
        </article>
        <article className="info">
          {" "}
          <h5 className="price">8.50 $</h5>
          <h3 className="pizza-name">Vagdo</h3>
          <pizza className="description">Mozzarella fior di latte , Patate novelle al forno , Brie , Pesto fatto in casa , Porchetta</pizza>
          <Link to="/pizza-vagdo/more">Add</Link>
        </article>
      </article>
     
    </section>
  )
}

export default WhitePizzas;