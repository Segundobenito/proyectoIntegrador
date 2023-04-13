import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
    return (
        <nav>
            <label className="logo"><Link exact={true} to="/"> MyflixeR </Link></label>
            <ul >
                <li><Link exact={true} to="/"> Home </Link> </li>
                <li><Link exact={true} to="/peliculas/top"> Ver las mejores peliculas </Link> </li>
                <li><Link exact={true} to="/series/top"> Ver las mejores series </Link> </li>
                <li><Link to="/favorites"> Favorites </Link> </li>
            </ul>
        </nav>
    )
}

export default Header;
