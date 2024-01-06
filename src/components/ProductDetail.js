import React from 'react';

const ProductDetail = ({ product }) => {

  return (
    <div className="product-detail">
       {product && (
        <div>
          <div>
            <div className='product'>
              <img src={product.picture} alt={product.title} />
              <div className="buy-product">
                <h2>{product.title}</h2>
                <p>{product.price.currency} {product.price.amount}</p>
                {product.free_shipping && <p>Free Shipping</p>}
                <p>Condition: {product.condition}</p>
                <p>Sold Quantity: {product.sold_quantity}</p>
                <button className='call-to-action'>Comprar</button>
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
