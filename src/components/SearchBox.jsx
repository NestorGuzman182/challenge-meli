import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/Logo_ML.png';
import searchbtn from '../assets/ic_Search.png';
import cartIcon from '../assets/cart-icon.png';

const SearchBox = ({ onCartBtnClick }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const cartItemsCount = useSelector(state => state.cart.items.length);
    const itemCount = typeof cartItemsCount === 'number' ? cartItemsCount : 0;

    const handleSearch = () => {
        if (query.trim() !== '') {
            navigate(`/items?search=${query}`);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleCartBtnClick = () => {
        onCartBtnClick(); 
        navigate('/cart')
    };

    return (
        <div className="search-box">
            <img src={logo} alt='logo' />
            <div className="container-search">
                <input type="text" placeholder='Nunca dejes de buscar' value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    onKeyPress={handleKeyPress}/>
                <button onClick={handleSearch}>
                    <img src={searchbtn} alt="buscar"/>
                </button>
            </div>
            <div className="cart-icon-container" onClick={handleCartBtnClick}>
                <img src={cartIcon} alt="carrito" className="cart-icon" />
                {itemCount > 0 && (
                    <div className="cart-notification">{itemCount}</div>
                )}
            </div>
        </div>
    );
};

export default SearchBox;