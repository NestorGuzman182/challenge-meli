import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { getProductDetails } from '../services/api';

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState('');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await getProductDetails(id);
        setProduct(response.item);

        if (response.item && response.item.category) {
          const categoryHierarchy = response.item.category.split('>');
          const formattedBreadcrumb = categoryHierarchy.map(category => category.trim()).join(' > ');
          setBreadcrumb(formattedBreadcrumb);
        }
      } catch (error) {
        console.error('Error al obtener detalels del producto', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <p className='breadcrumb'>{breadcrumb}</p>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetails;
