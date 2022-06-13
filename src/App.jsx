import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Signin from './pages/Signin';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductList />} />
      <Route path='/products/1' element={<ProductDetail />} />
      <Route path='/signin' element={<Signin />} />
    </Routes>
  );
};

export default App;
