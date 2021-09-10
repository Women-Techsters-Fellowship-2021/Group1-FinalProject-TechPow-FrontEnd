import React from 'react';
import { Link } from 'react-router-dom';

import TechPow_logo from '../../resources/Logos/TechPow Logo.png';

function Navbar() {
    return (
        <header>
                <div className="flex-header">
                    <div>
                        <img src={TechPow_logo} alt="TechPow Logo" className="head-logo" />
                    </div>
                    <div className="flex-header-links">
                        <nav>
                            <ul>
                                <Link to="/Home" className
                                    ="head-link">Home</Link>
                                <a href="#bg-primary" className
                                    ="head-link">Get Invlolved</a>
                                <Link to="/Contact" className
                                    ="head-link">Contact</Link>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <button className="btn-primary login-btn">
                            <a href="/Login" className
                                ="login-btn">Login</a>
                        </button>
                    </div>
                </div>
            </header>

    );
}

export default Navbar;