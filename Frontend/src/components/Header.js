import React from 'react';
import './Styles/Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="container-header">
                <header>
                    <div className="header-content">
                        <Link to="/" className="logo">
                            <div className="logo-icon">
                                <i className="fas fa-seedling"></i>
                            </div>
                            <div className="logo-text">ECO-RAIZ</div>
                        </Link>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" className="">
                                        <i className="fas fa-home"></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/soil-analysis">
                                        <i className="fas fa-chart-line"></i> Soil Analysis
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/report">
                                        <i className="fas fa-file-alt"></i> Report
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        <i className="fas fa-heart"></i> About
                                    </Link>
                                </li>
                                <li className="account-icon-container">
                                    <div  onClick={() => navigate('/profile')} className="account-icon" id="accountIcon">
                                        <i className="fas fa-user"></i>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;
