

import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts'
import HomePage from './pages/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage/>} />
        <Route path="/catalog" element={<Catalog />}>
        
        </Route>
        <Route path="contacts" element={<Contacts />}>
        
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
