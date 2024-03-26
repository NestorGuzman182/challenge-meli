import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import ProductDetails from './pages/ProductDetails';
import SearchBox from './components/SearchBox';
import CartList from './pages/CartList';
import './styles.css';

const App = () => {
  const [isCartListVisible, setCartListVisible] = useState(false);

  const toggleCartListView = () => {
    setCartListVisible(!isCartListVisible);
  };

  return (
    <Router>
      <SearchBox onCartBtnClick={toggleCartListView} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<SearchResults />} />
        <Route path="/items/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartList />} /> 
      </Routes>
    </Router>
  );
};

export default App;
