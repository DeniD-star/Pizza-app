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


//no za da razpoznae survura 4e sme nie koito iskame da se logoutnem,
//trqbva da mu podadem autoriziran request, kato dobavim accesstokena v headera

//i tui kato servisa nqma dostup do accessTokena, mu go podavame 4rez usercontexta.(tui kato servisire nqmat dostup do stata ili kontexta,
// samo hookovete tui kato sa 4ast ot komponentite, imat dostup do stata, do vseki edin kontext)