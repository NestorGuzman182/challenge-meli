import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo_ML.png';
import searchbtn from '../assets/ic_Search.png'

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

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
        </div>
    );
};

export default SearchBox;