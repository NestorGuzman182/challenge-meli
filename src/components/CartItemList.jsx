import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const CartItemList = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    return (
        <div className="cart-item-list">
            <h2>Productos en el Carrito</h2>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <div className='img-container-product'>
                        <img src={item.picture} alt="" />
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <p onClick={() => handleRemoveFromCart(item.id)}>Eliminar</p>
                    </div>
                    <p>$ {item.price.amount.toLocaleString('es-AR')}</p>
                </div>
            ))}
        </div>
    );
};

export default CartItemList;