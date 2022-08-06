
import "./index.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from '../../services/userService';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


const Register = () => {
  const {userLogin, user} = useContext(UserContext);
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRepass] = useState("");
  const [generalError, setGeneralError] = useState("");


  useEffect(()=>{
    if(user && user.accessToken ){
      navigate('/');
    }
  },[user])


  const handleRegister = async (e) => {
    e.preventDefault();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!email) {
      setGeneralError("Email is required!");
      return;
    } else if (!regexEmail.test(email)) {
      setGeneralError("This is not a valid email!");
      return;
    }

    if (!username) {
      setGeneralError("Username is required!");
      return;
    } else if (username.length < 3) {
      setGeneralError("Username must be more than 2 characters long!");
      return;
    }

    if (!password) {
      setGeneralError("Password is required!");
      return;
    } else if (password.length < 5) {
      setGeneralError("Password must be more than 4 characters long!");
      return;
    }

    if (!rePass) {
      setGeneralError("Repeating password is required!");
      return;
    } else if (password !== rePass) {
      setGeneralError("Passwords don`t match!");
      return;
    }


    userService.register(email, username, password, rePass)
    .then(userData=>{
        userLogin(userData);
        navigate('/');
    })
   
  };
  return (
    <section id="register">
      <article className="register-form">
        <h2>Create your account:</h2>
        <form id="view-register" >
          <label htmlFor="email">
            <i className="fa-solid fa-envelope"></i>Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="username">
            <i className="fa-solid fa-user"></i>Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor="password">
            <i className="fa-solid fa-lock"></i>Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label htmlFor="rePassword">
            <i className="fa-solid fa-repeat"></i>Repeat Password:
          </label>
          <input
            type="password"
            id="rePass"
            name="rePass"
            placeholder="Repeat Password"
            onChange={(e) => setRepass(e.target.value)}
            value={rePass}
          />
          <button
            type="submit"
            className="register-btn"
            onClick={handleRegister}
          >
            Register
          </button>

          {generalError && generalError}
          <article className="register-links">
            <Link to="/login">Already have an account?</Link>
          </article>
        </form>
      </article>
    </section>
  );
};

export default Register;



