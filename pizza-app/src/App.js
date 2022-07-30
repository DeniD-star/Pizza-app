import AuthenticationHoc from './components/hocs/AuthenticationHoc';
import { useDispatch } from 'react-redux';
import { login } from './features/userManagement/userManagement';
import { useState, useEffect } from 'react';
import * as pizzaService from "./services/pizzaService";


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
import Details from './pages/Details';
import ClientsCatalog from './pages/ClientsCatalog';
import Cart from './pages/Cart';
import Mypizzas from './pages/Profile/Mypizzas';
import Myorders from './pages/Profile/Myorders';





function App() {

  const [pizzas, setPizzas] = useState([]);

  const addComment = (pizzaId, comment)=>{
      setPizzas(state=>{
        const pizza = state.find(x=> x._id === pizzaId);//vzimam pizzata ot stata s pizzi
        const comments = pizza.comments || [];// suzdavamm si masiv ot comentari kato se baziram na sega6nite komentari ili nov masiv ot prazni komentari
        comments.push(comment);//kum koito dobavqm noviq
        

        //kogato iskame da promenqme state, vinagi trqbva da promenqme po novata referenziq
        //trqbva po nemotira6t na4in da obnovim stata
      return [
        ...state.filter(x=> x._id !== pizzaId),//sled tova iskam da vurna 4isto nov state, dai mi samo pizzata koqto mi trqbva
       { ...pizza, comments: comments}//dobavi nov obekt , toest pizzata, koqto izrqzvan ot gore, na koqto i dobavqm komentarite, podmenqm komentarite da sa aktualnite komentari
      ]
      })

  }

  useEffect(() => {
    // taka imam zapazeni igrite vutre v state na ClientsCatalog
    pizzaService.getAll()
    .then((pizzas) => {
      setPizzas(pizzas);
    });
  }, []);
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
      <Route index element={<HomePage />} />
      <Route path="/catalog" element={<Catalog />}>
      </Route>
      <Route path="/about" element={<AboutUs/>}>
      </Route>
      <Route path="/contacts" element={<Contacts />}>
      </Route>
      <Route path="/profile" element={<AuthenticationHoc><Profile /></AuthenticationHoc>}>
      </Route>
      <Route path="/login" element={<Login />}>
      </Route>
      <Route path="/register" element={<Register />}>
      </Route>
      <Route path="/catalog/traditionalPizzas" element={<TraditionalPizzas/>}>
      </Route>
      <Route path="/catalog/whitePizzas" element={<WhitePizzas/>}>
      </Route>
      <Route path="/catalog/drinks" element={<Drinks/>}>
      </Route>
      <Route path="/catalog/desserts" element={<Desserts/>}>
      </Route>
      <Route path="/catalog/createYourPizza" element={<AuthenticationHoc><CreateYourPizza/></AuthenticationHoc>}>
      </Route>
      <Route path="/edit/:pizzaId" element={<AuthenticationHoc><EditYourPizza/></AuthenticationHoc>}>
      </Route>
      <Route path="/details/:pizzaId" element={<Details pizzas={pizzas} addComment={addComment}/>}>
      </Route>
      <Route path="/clientsPizzas" element={<AuthenticationHoc><ClientsCatalog/></AuthenticationHoc>}>
      </Route>
      <Route path="/cart" element={<Cart/>}>
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
