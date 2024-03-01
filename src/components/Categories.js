import React, { useEffect, useState } from 'react';

const Categories = ({ categories }) => {
    const ACCESS_KEY = 'zZSAIdOZ1tw9LKV6ia5yu3jlT8WXTSKe0-wDcaaQMrE';
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryImages, setCategoryImages] = useState({});

    useEffect(() => {
      const fetchcategoryImages = async () => {
        const images = {};
        for(const category of categories) {
          try {
            const response = await fetch(`https://api.unsplash.com/photos/random?query=${category.name}&client_id=${ACCESS_KEY}`);
            const data = await response.json();
            if (response.ok && data && data.urls && data.urls.small) {
              images[category.id] = data.urls.small;
            }
          } catch (error) {
            console.error('Error fetching image for category', category.name, error);
        }
      }
      setCategoryImages(images);
    }
    fetchcategoryImages();
  }, [categories])

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
          <li key={category.id}> 
            <div>
             <img src={categoryImages[category.id]} alt={category.name} />
            </div>
             {category.name}
           </li>
        ))}
      </ul>

      <span>{`${currentPage} / ${totalPages}`}</span>
    </div>
  );
};

export default Categories;
