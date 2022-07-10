import React from 'react'
import './index.css';

const Login = () => {
  return (
    <section id="login">
      <article className="login-form">
        <h2>Login:</h2>
        <form id="view-login" action="" method="POST">
         <label htmlFor="email"> <i className="fa-solid fa-user"></i>Email:</label>
          
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Username"
            value=""
          />
          <label htmlFor="password"><i className="fa-solid fa-lock"></i>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
          />
          <input type="submit" className="login-btn" value="Login" />
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