import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import { Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import Checkout from './components/Checkout';
import About from './components/About'
import Contactus from './components/Contactus'
import Contact from './components/Contact'
import EmptyCart from './components/EmptyCart';

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/emptycart" element={<EmptyCart />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
    </>
  );
}

export default App;

