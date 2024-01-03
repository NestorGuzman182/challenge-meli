import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchProductDetails = async () => {
          try {
            const response = await api.get(`/api/items/${id}`);
            setProduct(response.data.item);
          } catch (error) {
            console.error('Error fetching product details', error);
          }
        };

        fetchProductDetails();
    }, [id]);
  return (
    <div className="product-detail">
       {product && (
        <div>
          <img src={product.picture} alt={product.title} />
          <div>
            <h2>{product.title}</h2>
            <p>{product.price.currency} {product.price.amount}</p>
            {product.free_shipping && <p>Free Shipping</p>}
            <p>Condition: {product.condition}</p>
            <p>Sold Quantity: {product.sold_quantity}</p>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
