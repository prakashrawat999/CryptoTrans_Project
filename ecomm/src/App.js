import './App.css';
import Home from './components/Home';
import payment from './components/payment';
import Successful from './components/successful'
import Failure from './components/failure';
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
import Login1 from './components/login'
import Signup1 from './components/signup'
import Reset from './components/reset'
import Forget from './components/forget'
import Profile from './components/profile';
import Recent from './components/recent';
import Privacypolicy from './components/privacypolicy';
import News from './components/news';
import store from './redux/store';
import { Provider } from 'react-redux';

import { TransactionProvider } from './contextAPI/TransContext';


const App = () => {
  return (
    <>
      <TransactionProvider>
      <Provider store={store}>
        <Routes>
          <Route exact path="/news" element={<News/>}/>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/success" element={<Successful/>}/>
          <Route exact path="/failure" element={<Failure/>}/>
          <Route exact path="/privacypolicy" element={<Privacypolicy />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/payment" element={<payment />} />
          <Route exact path="/tandc" element={<TandC />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/emptycart" element={<EmptyCart />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/coin" element={<Coin />} />
          <Route exact path="/crypto" element={<Crypto />} />
          <Route exact path="*" element={<ErrorPage />} />
          <Route exact path='/login' element={<Login1 />} />
          <Route exact path='/signup' element={<Signup1 />} />
          <Route exact path='/reset' element={<Reset />} />
          <Route exact path='/forget' element={<Forget />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/transacton' element={<Transaction />} />
          <Route exact path="/recent" element={<Recent />} />
        </Routes>
      </Provider>
      </TransactionProvider>
    </>
  );
}

export default App;
