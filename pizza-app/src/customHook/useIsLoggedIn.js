import { useSelector } from "react-redux";

const useIsLoggedIn = () => {

    const data = useSelector(state => state.userManagement);//se troviamo il tokenId, significa che luttente e' loggato

    return data.user && data.user.tokenId ;//react non vuole che chiamo i hook in modo condizionale
   
   
}

export default useIsLoggedIn;