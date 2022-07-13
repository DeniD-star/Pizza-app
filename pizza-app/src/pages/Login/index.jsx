import React from 'react'
import './index.css';
 import { useState } from 'react';

const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
 

  const handleLogin = (e)=>{
 console.log(email);
 console.log(password);
 e.preventDefault()
  }
  return (
    <section id="login">
      <article className="login-form">
        <h2>Login:</h2>
        <form id="view-login">
         <label htmlFor="email"> <i className="fa-solid fa-user"></i>Email:</label>
          
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password"><i className="fa-solid fa-lock"></i>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className="login-btn" onClick={handleLogin} >LOGIN</button>
        </form>
        <article className="login-links">
          <a href="##" className="link-forgotten">Forgotten username/password</a>
          <a href="/register" className="create-account">Create new account</a>
        </article>
      </article>
    </section>
  )
}


export default Login;