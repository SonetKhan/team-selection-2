import React from 'react';
import logo from '../../images/Real_Madrid_logo_PNG3 (1).png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src= {logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/information">Player-Bio</a>
                <a href="/details">Services</a>
            </nav>
        </div>
    );
};

export default Header;