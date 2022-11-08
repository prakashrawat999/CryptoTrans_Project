import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import Checkout from './components/Checkout';
import About from './components/About'
import Contactus from './components/Contactus'
import EmptyCart from './components/EmptyCart';
import Coin from './components/Coin';
import Crypto from "./components/Crypto";
import Transaction from './components/Transaction';
import Feedback from './components/Feedback';
import TandC from './components/TandC';

const App = () => {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/tandc" element={<TandC />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/emptycart" element={<EmptyCart />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/coin" element={<Coin />} />
          <Route exact path="/crypto" element={<Crypto />} />
          <Route exact path="/transaction" element={<Transaction />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
    </>
  );
}

export default App;

