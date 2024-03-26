import React from 'react';
import CartItemList from '../components/CartItemList';
import { useSelector } from 'react-redux';

const CartList = () => {
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price.amount;
    });
    return total;
  };

  return (
    <div className="container-cart">
        <h1>Carrito de Compras</h1>
      {cartItems.length > 0 ? (
      <div className="cart-list">
          <CartItemList />
        <div className="total-container">
          <h4>Resumen de compra</h4>
          <p>Productos ({cartItems.length})</p>
          <p>Total: ${calculateTotal().toLocaleString('es-AR')}</p>
          <button className='call-to-action'>Continuar comprar</button>
        </div>
      </div>
    ) : (
      <p className="message">Aún no hay productos agregados al carrito.</p>
    )}
    </div>
  );
};

export default CartList;