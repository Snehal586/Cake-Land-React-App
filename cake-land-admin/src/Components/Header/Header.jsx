import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="header">
            <Link to="/" className="logo-container">
                <h3 className='logo'>CakeLand</h3>
            </Link>
            <div className="options">
                <Link to="/" className="option">
                  Hello, Admin
                </Link>

            </div>
        </div>
     );
}
 
export default Header;