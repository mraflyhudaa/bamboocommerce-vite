import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
  const user = true;

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products/:category'>
          <ProductList />
        </Route>
        <Route path='/product/:id'>
          <ProductDetail />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/signin'>
          {user ? <Redirect to={'/'} /> : <Signin />}
        </Route>
        <Route path='/signup'>
          {user ? <Redirect to={'/'} /> : <Signup />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
