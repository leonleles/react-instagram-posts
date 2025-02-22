import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="InstaRocket" width="30px" />
                </Link>
                <Link to="/new">
                    <img src={camera} alt="Enviar publicação" width="30px" />
                </Link>
            </div>
        </header>
    );
}

export default Header;