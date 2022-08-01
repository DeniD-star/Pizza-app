// import React, { useEffect } from "react";
import "./index.css";
import { useState } from "react";
// import { auth } from "../../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../features/userManagement/userManagement";
import useIsLoggedIn from "../../customHook/useIsLoggedIn";
import { Link } from "react-router-dom";
import * as userService from '../../services/userService';
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const Login = () => {
  const {userLogin}= useContext(UserContext);//vzimam si userLogin funkziqta(setvaneto na usera),koqto q podadohme prez kontexta na App.js
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e)=>{
    e.preventDefault()
  }
  // const isLoggedIn = useIsLoggedIn();

  // const dispatch = useDispatch();
 

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     //react non vuole che chiamo i hook in modo condizionale
  //     navigate("/");
  //   }
  // }, []);

  const handleLogin = (e) => {
    console.log(email);
    console.log(password);
    e.preventDefault();

    userService.login(email, password)
    .then(userData=>{
       userLogin(userData);//podavame i dannite na usera ot tuk i v App.js, funkziqta userLogin 6te setne dannite v stata na usera, koito puk user state e dostupen su6to prez kontexta
       navigate('/');
    }).catch((error)=>{
      navigate('/404')
    })

    // signInWithEmailAndPassword(auth, email, password)
      // .then((userCredential) => {
      //   // Signed in

      //   if (
      //     userCredential &&
      //     userCredential.user &&
      //     userCredential.user.accessToken
      //   ) {
      //     const accessToken = userCredential.user.accessToken;
      //     localStorage.setItem("userId", accessToken);
      //     dispatch(login(accessToken));
      //     navigate("/");
      //   } 
         
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;

      //   console.log(errorMessage)

      //   console.log(error.code);

      //   if (error && error.code === 400) {
      //     setError('Invalid email or password!')
      //   }else{
      //     setError('Authentication error!')
      //   }
      // });

      // console.log(error)
  };
  return (
    <section id="login">
      <article className="login-form">
        <h2>Login:</h2>
        <form id="view-login" onSubmit={onSubmit}>
          <label htmlFor="email">
            {" "}
            <i className="fa-solid fa-user"></i>Email:
          </label>

          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">
            <i className="fa-solid fa-lock"></i>Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className="login-btn" onClick={handleLogin}>
            LOGIN
          </button>
          {error && error}
        </form>
        <article className="login-links">
          <Link to="##" className="link-forgotten">
            Forgotten username/password
          </Link>
          <Link to="/register" className="create-account">
            Create new account
          </Link>
        </article>
      </article>
    </section>
  );
};

export default Login;

//v dev-tools, network, v payload mojem da vidim kakvo izpra6tame , dannite na usera, tova koeto izpra6tame v body(email, password),
//v preview i response vijdame responsa ot servara, koito se sustoi ot emaila na potrebitela,
//id-to na registriraniq, lognatiq potrebitel, i accesstokena koito survara ni vru6ta
//sega trqbva da suhranim tezi dati vurnati ni ot servura, ipo-skoro accesstokena, za da ni posluji kato pasport sledva6tiq put pred servura
//minimo trqbva da go zapazim v nqkakuv state, no za da moje cqloto prilojenie da si posluji stozi token, stata nqma da go napravim v login a v app.js
//{lifted state}, no za da izbegnem prop-drilling, 6te si napravim context, no za da moje vseki ot komponentite koito iska da se zaka4i, da ima dostup do informaciqta na potrebitelq, imenno 4rez tozi kontext
//Sled kato se lognem vijdame 4e v app.componenta (components-dev-tools)ima zapazeni dva state, na6ite pizi i dannite na usera
//No kogato refre6na stata ot dannite na usera se izprazva, za6toto vsi4ko se renderira otnovo, reakta se vklu4va na novo i poneje dannite sa zapazeni samo na state v app, a ne v survura, ne persistirat

