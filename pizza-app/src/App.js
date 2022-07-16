import AuthenticationHoc from './components/hocs/AuthenticationHoc';

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




function App() {
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
      <Route path="/login" element={<AuthenticationHoc><Login /></AuthenticationHoc>}>
      </Route>
      <Route path="/register" element={<AuthenticationHoc><Register /></AuthenticationHoc>}>
      </Route>
      <Route path="/traditionalPizzas" element={<AuthenticationHoc><TraditionalPizzas/></AuthenticationHoc>}>
      </Route>
    </Routes>
    {/* <Footer/> */}
  </>
  );
}

export default App;
