import React from 'react'
import './index.css';
const Register = () => {
  return (
    <section id="register">
    <article className="register-form">
        <h2>Create your account:</h2>
        <form id="view-register" action="" method="POST">
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i>Email:</label>
            <input type="text" id="email" name="email" placeholder="Email" value=""/>
            <label htmlFor="username"><i className="fa-solid fa-user"></i>Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Username" value=""/>
            <label htmlFor="password"><i className="fa-solid fa-lock"></i>Password:</label>
            <input type="password" id="password" name="password" placeholder="Password"/>
            <label htmlFor="rePassword"><i className="fa-solid fa-repeat"></i>Repeat Password:</label>
            <input type="password" id="rePass" name="rePass" placeholder="Repeat Password"/>
            <input type="submit" className="register-btn" value="Register"/>
            <article className="register-links">
                <a href="/login">Already have an account?</a>
            </article>
        </form>
    </article>
 
</section>
  )
}

export default Register;