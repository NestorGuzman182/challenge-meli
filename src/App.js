import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import ProductDetails from './pages/ProductDetails';
import SearchBox from './components/SearchBox';
import './styles.css';

const App = () => {
  return (
    <Router>
      <SearchBox/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<SearchResults />} />
        <Route path="/items/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
