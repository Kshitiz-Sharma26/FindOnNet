import './App.css';


import React from 'react';
import { Route,Routes } from "react-router-dom";
import ProductCategory from './pages/productCategory';
import UpcomingProducts from './pages/upcomingProducts';
import AddToCart from './pages/AddToCart';
import OrderHistory from './pages/OrderHistory';
import ProductDescription from './pages/ProductDescription';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/orderHistory" element={<OrderHistory/>} />
        <Route path="/productDescription" element={<ProductDescription/>} />
        <Route path="/addToCart" element={<AddToCart/>} />
        <Route path="/categorySelection" element={<ProductCategory/>} />
        <Route path="/upcomingProducts" element={<UpcomingProducts/>} />
    </Routes>
  );
};

export default App;
