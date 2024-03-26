// Pagination.js

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  //const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}> &lt;Anterior</button>
      )}
      <p>
        <label>{currentPage}</label> de {totalPages}
      </p>
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>Siguiente &gt; </button>
      )}
    </div>
  );
};

export default Pagination;
