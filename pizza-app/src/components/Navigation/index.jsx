import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useContext } from "react"; 
import { UserContext } from "../../context/UserContext";

const Navigation = () => {
  const { user } = useContext(UserContext);
 
  return (
    <header className="header">
      <Link to="/" className="title-link">
        <h1 className="title">
          Pizza is <span className="italy">Italy</span>
        </h1>
      </Link>
      <nav className="navigation">
        <ul className="nav-list">
          <section className="welcome">
            <li className="list-item">
              <i className="fa-solid fa-house"></i>
              <Link to="/" className="nav-link">
                Welcome
              </Link>
            </li>
          </section>
          <section className="user-navigation">
            <li className="list-item">
              <i className="fa-solid fa-caret-down"></i>
              <Link to="/catalog" className="nav-link drop-down">
                Our Menu
              </Link>
            </li>
            <li className="list-item">
              <i className="fa-solid fa-comments"></i>
              <Link to="/clientsPizzas" className="nav-link">
                Clients catalog
              </Link>
            </li>
            {!user.email ? 
              <>
                <li className="list-item">
                  <i className="fa-solid fa-right-to-bracket"></i>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>

                <li className="list-item">
                  <i className="fa-solid fa-right-to-bracket"></i>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
             : 
              <li className="list-item">
                <i className="fa-solid fa-right-to-bracket"></i>
                <Link to="/logout" className="nav-link" >
                  Logout
                </Link>
              </li>
            }

            <li className="list-item">
              <i className="fa-solid fa-cart-arrow-down"></i>
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
            {user.email && (
              <li className="list-item">
                <i className="fa-solid fa-user"></i>
                <Link to="/profile" className="nav-link">
                  Hi, {user.username}
                </Link>
              </li>
            )}
          </section>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
