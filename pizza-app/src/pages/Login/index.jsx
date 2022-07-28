import React, { useEffect } from 'react'
import './index.css';
 import { useState } from 'react';
 import {auth} from '../../firebase';
 import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../features/userManagement/userManagement';
import useIsLoggedIn from '../../customHook/useIsLoggedIn';
import { Link } from 'react-router-dom';


const Login = () => {

 const isLoggedIn = useIsLoggedIn();

  
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
 
  useEffect(()=>{
    if(isLoggedIn){ //react non vuole che chiamo i hook in modo condizionale
      navigate('/')
    }
  }, []);

  const handleLogin = (e)=>{
    console.log(email);
    console.log(password);
    e.preventDefault();
 

 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 

   
   if(userCredential && userCredential.user && userCredential.user.accessToken){
        const accessToken = userCredential.user.accessToken;
        localStorage.setItem('userId', accessToken);
        dispatch(login(accessToken));
        navigate('/');
   }
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
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
          <Link to="##" className="link-forgotten">Forgotten username/password</Link>
          <Link to="/register" className="create-account">Create new account</Link>
        </article>
      </article>
    </section>
  )
}


export default Login;