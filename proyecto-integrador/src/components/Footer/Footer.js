import React from 'react';
import './styles.css';

 function Footer() {
    return (
        <footer>
            <div className = "footer-content">
                <h3>MyFlixer</h3>
                <p>Copyright</p>
            </div>

            <ul className = "names">
                <li><a href>Segundo Benito</a></li>
                <li><a href>Zackarias O'Farrell</a></li>
                <li><a href>Tomas Arizu</a></li>
            </ul>

            <div className = "footer-bottom">
                <p>copyright &copy; 2023 MyFlixer. designed by <span>udesa</span></p>
            </div>

        </footer>
    )
}

export default Footer;
