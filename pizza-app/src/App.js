import NavigationHoc from './components/hocs/NavigationHoc';

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




function App() {
  return (

    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route index element={<HomePage />} />
      <Route path="/catalog" element={<NavigationHoc><Catalog /></NavigationHoc>}>
      </Route>
      <Route path="/about" element={<NavigationHoc><AboutUs/></NavigationHoc>}>
      </Route>
      <Route path="/contacts" element={<NavigationHoc><Contacts /></NavigationHoc>}>
      </Route>
      <Route path="/profile" element={<NavigationHoc><Profile /></NavigationHoc>}>
      </Route>
      <Route path="/login" element={<NavigationHoc><Login /></NavigationHoc>}>
      </Route>
      <Route path="/register" element={<NavigationHoc><Register /></NavigationHoc>}>
      </Route>
    </Routes>

  );
}

export default App;
