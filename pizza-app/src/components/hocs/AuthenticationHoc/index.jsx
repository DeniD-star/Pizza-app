import React from 'react'
//priema component, children , koito vru6tame, ako usera e lognat
//aloud users e masiv ot user roli, koito mogat da dostupvat tozi komponent
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const AuthenticationHoc = ({children, shouldBeLogged}) => {
    const user = useSelector((store) => store.userManagement.user);
   console.log(user);
    
    // if(!shouldBeLogged && !user){
    //     return <Navigate to="/" />;
    // }

  return (
   children
  )
}

export default AuthenticationHoc;