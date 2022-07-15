import React from "react";
import "./index.css";
import { useState } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase';



import {useNavigate} from 'react-router-dom';

 const Register = () => {
   
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRepass] = useState('');

    const handleRegister = async(e) => {
    console.log(email);
    console.log(username);
    console.log(password);
    console.log(rePass);
    e.preventDefault();

  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        navigate('/');
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
   
  };
  return (
    <section id="register">
      <article className="register-form">
        <h2>Create your account:</h2>
        <form id="view-register">
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
          <article className="register-links">
            <a href="/login">Already have an account?</a>
          </article>
        </form>
      </article>
    </section>
  );
};

export default Register;
