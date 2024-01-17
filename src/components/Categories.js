import React, { useState } from 'react';

const Categories = ({ categories }) => {
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCategories = categories.slice(startIndex, endIndex);

    const totalPages = Math.ceil(categories.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
    };

  return (
    <div className='section'>
      
      {totalPages > 1 && (
        <div className='control-buttons'>
          <button className={currentPage === 1 ? 'hidden' : 'left-btn'} onClick={handlePrevPage}>&lt;</button>
          <button className={currentPage === totalPages ? 'hidden' : 'right-btn'} onClick={handleNextPage}>&gt;</button>
        </div>
      )}
      <h3>Categorías: <span>Mostrar todas las categorias</span></h3>
      <ul>
        {currentCategories.map(category => (
          <li key={category.id}> {category.name} </li>
        ))}
      </ul>

      <span>{`${currentPage} / ${totalPages}`}</span>
    </div>
  );
};

export default Categories;
