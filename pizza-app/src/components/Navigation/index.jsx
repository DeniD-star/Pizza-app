import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const isLogged = localStorage.getItem("isLogged");
const handleLogout= ()=>{
  localStorage.setItem("isLogged", false)
}
  return (
    <header className="header">
      <h1 className="title">
        Pizza is <span className="italy">Italy</span>
      </h1>
      <nav className="navigation">
        <ul className="nav-list">
          <section className="welcome">
            <li className="list-item">
              <i className="fa-solid fa-house"></i>
              <Link to="/" className="nav-link">
                Welcome{" "}
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
              <i className="fa-solid fa-chalkboard-user"></i>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="list-item">
              <i className="fa-solid fa-address-book"></i>
              <Link to="/contacts" className="nav-link">
                Contacts
              </Link>
            </li>
            {isLogged === "false" && (
              <li className="list-item">
                <i className="fa-solid fa-right-to-bracket"></i>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            )}
            {isLogged === "false" ? (
              <li className="list-item">
                <i className="fa-solid fa-right-to-bracket"></i>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            ) : (
              <li className="list-item">
                <i className="fa-solid fa-right-to-bracket"></i>
                <Link to="/login" className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            )}

            <li className="list-item">
              <i className="fa-solid fa-user"></i>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </section>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
