import logo from './logo.svg';
import './App.css';
import Navbarr from './component/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom'
import Main from './component/Main';
import Service from './component/Service';
import Product from './component/Product';
import Signup from './component/Signup';


function App() {
  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="home" element={<Main />}></Route>
        <Route path="service" element={<Service />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
