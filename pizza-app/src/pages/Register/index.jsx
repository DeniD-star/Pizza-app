// import React from "react";
import "./index.css";
// import { useState, useEffect } from "react";
// import { auth } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/userManagement/userManagement";
import { createUserData } from "../../httpRequest";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRepass] = useState("");
  const [generalError, setGeneralError] = useState("");

  const handleRegister = async (e) => {
    console.log(email);
    console.log(username);
    console.log(password);
    console.log(rePass);
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

    // // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     //la risoluzione della promise della registrazione
    //     createUserData({
    //       name: "testName",
    //       lastName: "testLastName",
    //     });

    //     // Signed in
    //     // signInWithEmailAndPassword(auth, email, password)
    //       .then((userCredential) => {
    //         // Signed in
    //         if (
    //           userCredential &&
    //           userCredential.user &&
    //           userCredential.user.accessToken
    //         ) {
    //           const accessToken = userCredential.user.accessToken;
    //           localStorage.setItem("userId", accessToken);
    //           dispatch(login(accessToken)); //non sono sicura se devo cambiare con register
    //           navigate("/");
    //         }

    //         // const user = userCredential.user;//
    //         // console.log('user', user);
    //         // dispatch(login(user.email));
    //         // navigate('/');
    //         // // ...
    //         // // localStorage.setItem("isLogged", true)

    //         // // console.log(user);
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //       });

    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
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

//without any help library

// export default function Register() {
//   const initialValues = { email: "", username: "", password: "", rePass: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     // console.log(e.target);
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, name: value });
//     // console.log(formValues);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     // console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       // console.log(formValues);
//     }
//   }, [formErrors]);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email!";
//     }
//     if (!values.username) {
//       errors.username = "Username is required!";
//     } else if (values.username.length < 3) {
//       errors.username = "Username must be at least 3 characthers long!";
//     }
//       if (!values.password) {
//         errors.password = "Password is required!";
//       } else if (values.password.length < 6) {
//         errors.password = "Password must be at least 6 characters long!";
//       } else if (values.password.length > 10) {
//         errors.password = "Password cannot exceed more than 10 characters!";
//       }
//       if (!values.rePass) {
//         errors.rePass = "Repeating password is required!";
//       } else if (values.rePass.length !== values.password.length) {
//         errors.rePass = "Passwords don't match";
//       }

//       return errors;
//     }

//     return (
//       <section id="register">
//         {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
//           <div className="ui message success">Signed in successfully</div>
//         ) : (
//           <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//         )} */}
//         <article className="register-form">
//           <h2>Create your account:</h2>

//           <form id="view-register" onSubmit={handleSubmit}>
//             <label htmlFor="email">
//               <i className="fa-solid fa-envelope"></i>Email:
//             </label>
//             <input
//               type="text"
//               id="email"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//             <p>{formErrors.email}</p>
//             <label htmlFor="username">
//               <i className="fa-solid fa-user"></i>Username:
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Enter your Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//             <p>{formErrors.username}</p>
//             <label htmlFor="password">
//               <i className="fa-solid fa-lock"></i>Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//             <p>{formErrors.password}</p>
//             <label htmlFor="rePassword">
//               <i className="fa-solid fa-repeat"></i>Repeat Password:
//             </label>
//             <input
//               type="password"
//               id="rePass"
//               name="rePass"
//               placeholder="Repeat Password"
//               value={formValues.rePass}
//               onChange={handleChange}
//             />
//             <p>{formErrors.rePass}</p>
//             <button
//               type="submit"
//               className="register-btn"
//               // onClick={handleRegister}
//             >
//               Register
//             </button>
//             <article className="register-links">
//               <a href="/login">Already have an account?</a>
//             </article>
//           </form>
//         </article>
//       </section>
//     );
//   };
