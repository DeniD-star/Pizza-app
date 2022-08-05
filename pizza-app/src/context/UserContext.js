import {useLocalStorage} from '../hooks/useLocalStorage';

import { createContext } from "react";

export const UserContext = createContext();



export const UserProvider = ({
    children,//vsi4ko, koeto stoi pod UserProvider v App.js, toest vsi4ki komponenti  pod nego
}) => {
    const [user, setUser] = useLocalStorage('user', {}) 

    const userLogin = (userData) => {
        setUser(userData);
      }
      const userLogout = () => {                                                              //po tozi na4in premahvame sesiqta i ot klienta
        setUser({});
      }

      return (
          <UserContext.Provider value={{ user, userLogin, userLogout, isAuthenticated: Boolean(user.accessToken)}}>
                {children}
          </UserContext.Provider>
      )
}


//rabotata na tozi kontext e edinstveno da durji stata i da go menajira
//HOfunction-in javascript gunkciq koqto moje da priema druga funkziq i vru6ta druga funkziq
//HOC mnogo 4esto zapo4vat s with, priema component i vru6ta komponent
//Pravim si HOC nai-4esto za da mu zaka4im pove4e funkvionalnosti