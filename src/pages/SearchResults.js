import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchResult from '../components/SearchResult';
import api from '../services/api';

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('search');
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await api.get(`/api/items?q=${searchQuery}`);
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results', error);
      }
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <div>
      <SearchResult results={results} />
    </div>
  );
};

export default SearchResults;
