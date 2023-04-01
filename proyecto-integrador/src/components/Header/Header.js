import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


 function Header() {
    return (
        <nav>

               <label className = "logo">MyflixeR</label>
                <ul >
                    <li ><Link exact = {true} to = "/"> Home </Link> </li>
                    <li><Link to = "/about"> about </Link> </li>
                    <li><Link to = "/contact"> Contact us </Link> </li>
                    <li><Link to = "/favorites"> Favorites </Link> </li>
                </ul>
    

        </nav>
    )
}

export default Header;
