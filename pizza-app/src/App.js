import AuthenticationHoc from './components/hocs/AuthenticationHoc';
import { useDispatch } from 'react-redux';
import { login } from './features/userManagement/userManagement';

import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts'
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import TraditionalPizzas from './pages/Catalog/TraditionalPizzas';
import Navigation from './components/Navigation';
import WhitePizzas from './pages/Catalog/WhitePizzas';
import Drinks from './pages/Catalog/Drinks';
import Desserts from './pages/Catalog/Desserts';
import CreateYourPizza from './pages/Catalog/CreateYourPizza';
import EditYourPizza from './pages/Catalog/EditYourPizza';
import Details from './pages/Catalog/Details';
import ClientsCatalog from './pages/ClientsCatalog';
import Cart from './pages/Cart';
import Mypizzas from './pages/Profile/Mypizzas';
import Myorders from './pages/Profile/Myorders';




function App() {
    const tokenId =localStorage.getItem('userId');
    const dispatch = useDispatch();//si cercami login e inviami il token
    if(tokenId){
      dispatch(login(tokenId));
      
    }


  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route index element={<AuthenticationHoc><HomePage /></AuthenticationHoc>} />
      <Route path="/catalog" element={<AuthenticationHoc><Catalog /></AuthenticationHoc>}>
      </Route>
      <Route path="/about" element={<AuthenticationHoc><AboutUs/></AuthenticationHoc>}>
      </Route>
      <Route path="/contacts" element={<AuthenticationHoc><Contacts /></AuthenticationHoc>}>
      </Route>
      <Route path="/profile" element={<AuthenticationHoc><Profile /></AuthenticationHoc>}>
      </Route>
      <Route path="/login" element={<AuthenticationHoc shouldBeLogged={true}><Login /></AuthenticationHoc>}>
      </Route>
      <Route path="/register" element={<AuthenticationHoc><Register /></AuthenticationHoc>}>
      </Route>
      <Route path="/traditionalPizzas" element={<AuthenticationHoc><TraditionalPizzas/></AuthenticationHoc>}>
      </Route>
      <Route path="/whitePizzas" element={<AuthenticationHoc><WhitePizzas/></AuthenticationHoc>}>
      </Route>
      <Route path="/drinks" element={<AuthenticationHoc><Drinks/></AuthenticationHoc>}>
      </Route>
      <Route path="/desserts" element={<AuthenticationHoc><Desserts/></AuthenticationHoc>}>
      </Route>
      <Route path="/createYourPizza" element={<AuthenticationHoc><CreateYourPizza/></AuthenticationHoc>}>
      </Route>
      <Route path="/edit/:pizzaId" element={<AuthenticationHoc><EditYourPizza/></AuthenticationHoc>}>
      </Route>
      <Route path="/details/:pizzaId" element={<AuthenticationHoc><Details/></AuthenticationHoc>}>
      </Route>
      <Route path="/clientsPizzas" element={<AuthenticationHoc><ClientsCatalog/></AuthenticationHoc>}>
      </Route>
      <Route path="/cart" element={<AuthenticationHoc><Cart/></AuthenticationHoc>}>
      </Route>
      <Route path="/my-pizzas-profile" element={<AuthenticationHoc><Mypizzas/></AuthenticationHoc>}>
      </Route>
      <Route path="/my-orders" element={<AuthenticationHoc><Myorders/></AuthenticationHoc>}>
      </Route>
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
