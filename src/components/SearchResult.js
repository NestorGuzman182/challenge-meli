import React from 'react';
import shipping from '../assets/ic_shipping.png';

const SearchResult = ({ results, onItemClick }) => {
  return (
    <div className="search-results">
      {results && results.map(item => (
        <div key={item.id} className="search-result-item" onClick={() => onItemClick(item.id)}>
          <img src={item.picture} alt={item.title} />
          <div className='container-info'>
            <div className='price'>
              <h3>${item.price.amount.toLocaleString('es-AR', { maximumFractionDigits: 0 })}</h3>
                {item.free_shipping && <img src={shipping} alt='envio gratis'/>}
            </div>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
