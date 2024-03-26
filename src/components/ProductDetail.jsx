import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions'; 

const ProductDetail = ({ product }) => {

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const translate = {
    condition: {
      'new': 'Nuevo',
      'used': 'Usado'
    }
  }


  return (
    <div className="product-detail">
       { product && (
        <div>
          <div>
            <div className='product'>
              <img src={product.picture} alt={product.title} />
              <div className="buy-product">
                <span>{translate.condition[product.condition]} - {product.sold_quantity}</span>
                <h3 className='product-title'>{product.title}</h3>
                <div className="price"> 
                  <span className="integer-part">$ {product.price.amount.toLocaleString('es-AR')}</span> 
                </div>
                <button className='call-to-action'>Comprar</button>
                <button className='btn-second' onClick={handleAddToCart}>Agregar el carrito</button>
              </div>
            </div>
            <div className='product-description'>
              <h2>Descripción del producto</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
