import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo_ML.png';
import searchbtn from '../assets/ic_Search.png'

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim() !== '') {
            navigate.push(`/items?search=${query}`);
        }
    };

    return (
        <div className="search-box">
            <img src={logo} alt='logo' />
            <div className="container-search">
                <input type="text" placeholder='Nunca dejes de buscar' value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleSearch}>
                    <img src={searchbtn} />
                </button>
            </div>
        </div>
    );
};

export default SearchBox;