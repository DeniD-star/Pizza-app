

import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts'
import HomePage from './pages/HomePage';
import {
  Routes,
  Route,
} from "react-router-dom";


import './App.css';


function App() {
  return (

    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route index element={<HomePage />} />
      <Route path="/catalog" element={<Catalog />}>
      </Route>
      <Route path="contacts" element={<Contacts />}>
      </Route>
    </Routes>

  );
}

export default App;
