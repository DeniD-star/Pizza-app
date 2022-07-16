import React from 'react'
//priema component, children , koito vru6tame, ako usera e lognat
//aloud users e masiv ot user roli, koito mogat da dostupvat tozi komponent
import { Navigate } from 'react-router-dom';

const AuthenticationHoc = ({children, allowedUsers}) => {
    const isLogged = localStorage.getItem('isLogged');
        console.log(isLogged);
    if(isLogged === false){
        return <Navigate to="/" />;
    }

  return (
   children
  )
}

export default AuthenticationHoc;