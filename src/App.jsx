import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Success from './pages/Success';

const App = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    //change this according to your client-key
    const myMidtransClientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute('data-client-key', myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products'>
            <ProductList />
          </Route>
          <Route path='/products/:category'>
            <ProductList />
          </Route>
          <Route path='/product/:id'>
            <ProductDetail />
          </Route>
          <Route path='/checkout'>
            {user ? <Checkout /> : <Redirect to={'/'} />}
          </Route>
          <Route path='/success'>
            <Success />
          </Route>
          <Route path='/signin'>
            {user ? <Redirect to={'/'} /> : <Signin />}
          </Route>
          <Route path='/signup'>
            {user ? <Redirect to={'/'} /> : <Signup />}
          </Route>
        </Switch>
      </Router>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
};

export default App;
