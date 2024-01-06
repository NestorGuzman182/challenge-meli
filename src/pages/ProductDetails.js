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
        console.log('Detalle del producto:', response);
        setProduct(response.item);
      } catch (error) {
        console.error('Error fetching product details', error);
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
