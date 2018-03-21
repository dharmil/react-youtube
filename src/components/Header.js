import React from 'react';
import './../App.css';
import Search from './Search';

const Header = () => {
    return <div className = "header">
        <div className = "nav">
            <span>Home</span>
            <span>Playlist</span>
        </div>
        <Search />
    </div>
};

export default Header;