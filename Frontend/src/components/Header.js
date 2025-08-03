import React from 'react';
import './Header.css'
function Header(){
    return(
        <div>
 <div class="container-header">
        <header>
            <div class="header-content">
                <a href="#" class="logo">
                    <div class="logo-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <div class="logo-text">The Smart Planting System</div>
                </a>
                <nav>
                    <ul>
                        <li><a href="#" class="active"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="#"><i class="fas fa-chart-line"></i> Soil Analysis</a></li>
                        <li><a href="#"><i class="fas fa-info-circle"></i> Report</a></li>
                        <li><a href="#"><i class="fas fa-info-circle"></i> About</a></li>
                        <li class="account-icon-container">
                            <div class="account-icon" id="accountIcon">
                                <i class="fas fa-user"></i>
                            </div>
                        </li>
                    </ul>
                    <div class="account-dropdown" id="accountDropdown">
                        <a href="#"><i class="fas fa-user-circle"></i> My Profile</a>
                        <a href="#"><i class="fas fa-cog"></i> Settings</a>
                        <a href="#"><i class="fas fa-history"></i> Activity</a>
                        <div class="account-divider"></div>
                        <a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
                    </div>
                </nav>
            </div>
        </header>
    </div>
    
        </div>
    )
}

export default Header;