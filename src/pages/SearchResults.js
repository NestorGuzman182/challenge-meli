import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchResult from '../components/SearchResult';
import Pagination from '../components/Pagination';
import ProductDetail from '../components/ProductDetail';
import { searchItems, getProductDetails } from '../services/api';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get('search');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const [breadcrumb, setBreadcrumb] = useState('');
  //const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        const { categories, items } = await searchItems(searchQuery);
  
        if (categories.values && categories.values.length > 0) {
          const mostResultsCategory = categories.values.reduce((prev, current) =>
            (prev.results > current.results) ? prev : current
          );
          setBreadcrumb(mostResultsCategory.path_from_root.map(category => category.name).join(' > '));
        }else {
          setBreadcrumb('')
        }
        
        console.log(items)
        setResults(items);

      } catch (error) {
        console.error('Error al consultar los datos', error);
        setError('Error al cargar los resultados');
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchResults();
    }
    //console.log(results)
  }, [searchQuery]);

     useEffect(() => {
      console.log('Results in SearchResults:', results);
    }, [currentPage, results]);

  const handleItemClick = async (productId) => {
    navigate(`/items/${productId}`);
  };

  return (
    <div className="container-response">
      {loading && <p>Cargando resultados...</p>}
      {error && <p>{error}</p>}
      {results && results.length > 0 ? (
        <div>
          <p className='breadcrumb'>{breadcrumb}</p>
          <SearchResult
            results={results.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)}
            onItemClick={handleItemClick}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(results.length / productsPerPage)}
            onPageChange={(newPage) => setCurrentPage(newPage)}
          />
        </div>
      ) : (
        <p>No hay resultados disponibles.</p>
      )}
    </div>
  );
};

export default SearchResults;
