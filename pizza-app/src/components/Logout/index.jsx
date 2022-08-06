import React from 'react';
import { useEffect , useContext} from 'react';
import { useNavigate } from 'react-router';
import  * as userService from '../../services/userService';
import { UserContext } from '../../context/UserContext';


const Logout = () => {
    const navigate = useNavigate();
    const {user, userLogout} = useContext(UserContext);
  

    useEffect(()=>{
        userService.logout(user.accessToken)
        .then(()=>{
            userLogout();
            navigate('/')
        })
        .catch(()=>{
            navigate('/');
        })
    })

    return null;
}

export default Logout;


