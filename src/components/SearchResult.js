import React from 'react';

const SearchResult = ({ results }) => {
  return (
    <div className="search-results">
      {results && results.items && results.items.map(item => (
        <div key={item.id} className="search-result-item">
          <img src={item.picture} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.price.currency} {item.price.amount}</p>
            {item.free_shipping && <p>Free Shipping</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
