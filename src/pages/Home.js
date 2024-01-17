import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import { getCategories } from '../services/api';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async() => {
      const categories = await getCategories(); 
      setCategories(categories)
    }

    fetchCategories();
  }, []);
  return (
    <div className="container-response">
      <Categories categories={categories}/>
    </div>
  );
};

export default Home;