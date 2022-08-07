import { UserProvider } from './context/UserContext';
import { PizzaProvider} from './context/pizzaContext';
import {
  Routes,
  Route
} from "react-router-dom";

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
import PageNotFound from './components/PageNotFound';
import Logout from './components/Logout';
import PrivateRoute from './common/PrivateRoute';
import SuccessfulOrder from './components/Successful';



function App() {

  return (
    <>
    <UserProvider >
     
        <Navigation />
        <PizzaProvider >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<Catalog />}>
          </Route>
          <Route path="/about" element={<AboutUs />}>
          </Route>
          <Route path="/contacts" element={<Contacts />}>
          </Route>
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/logout" element={<Logout />}>
          </Route>
          <Route path="/catalog/traditionalPizzas" element={<TraditionalPizzas />}>
          </Route>
          <Route path="/catalog/whitePizzas" element={<WhitePizzas />}>
          </Route>
          <Route path="/catalog/drinks" element={<Drinks />}>
          </Route>
          <Route path="/catalog/desserts" element={<Desserts />}>
          </Route>
          <Route path="/catalog/createYourPizza" element={<PrivateRoute><CreateYourPizza /></PrivateRoute>}>
          </Route>
          <Route path="/edit/:pizzaId" element={<PrivateRoute><EditYourPizza /></PrivateRoute>}>
          </Route>
          <Route path="/details/:pizzaId" element={<Details  />}>
          </Route>
          <Route path="/clientsPizzas" element={<PrivateRoute><ClientsCatalog /></PrivateRoute>}>
          </Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
          <Route path="/my-pizzas-profile" element={<PrivateRoute><Mypizzas/></PrivateRoute>}>
          </Route>
          <Route path="/my-orders" element={<PrivateRoute><Myorders /></PrivateRoute>}>
          </Route>
          <Route path="/404" element={<PageNotFound />}>
          </Route>
          <Route path="/successful-order" element={<SuccessfulOrder />}>
          </Route>
        </Routes>
        </PizzaProvider>
        <Footer />
  
    </UserProvider>
    </>
  );
}

export default App;
