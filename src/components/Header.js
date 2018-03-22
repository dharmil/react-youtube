import React from 'react';
import './../App.css';
import Search from './Search';
import {Link} from 'react-router-dom';

const Header = () => {
    return <div className = "header">
        <div className = "nav">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/playlist">Playlist</Link></span>
        </div>
        <Search />
    </div>
};

export default Header;