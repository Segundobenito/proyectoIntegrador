import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


 function Header() {
    return (
        <header>
            
            <ul>
      
                <li><Link to = "/"> Home </Link> </li>
                <li> <Link to = "/favorites"> Favorites </Link> </li>
            </ul>

        </header>
    )
}

export default Header;
