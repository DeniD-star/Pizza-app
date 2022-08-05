import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(UserContext);

    if (!isAuthenticated) {
     
        return <Navigate to='/login' replace />
        
        }

    return (
        <>
                {children}
        </>
    )
}


export default PrivateRoute;