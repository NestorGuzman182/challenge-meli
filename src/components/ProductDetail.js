import React from 'react';

const ProductDetail = ({ product }) => {

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
                <h3>{product.title}</h3>
                <div className="price"> 
                  <span className="integer-part">$ {product.price.amount.toLocaleString('es-AR')}</span> 
                </div>
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
