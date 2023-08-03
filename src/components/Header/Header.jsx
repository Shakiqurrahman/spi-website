import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
        <div className="logo">
            <img src="images/sylhet-polytechnic-institute.png" alt="" />
        </div>
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/event">Event</NavLink></li>
                <li><NavLink to="/department">Department</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/result">Result</NavLink></li>
                <li><NavLink to="/facilities">Facilities</NavLink></li>
            </ul>
        </nav>
        <div className="login-btn">
            <Link href="">LOG IN</Link>
        </div>
    </header>
    );
};

export default Header;