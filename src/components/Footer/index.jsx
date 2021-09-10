import React from 'react';
import { Link } from 'react-router-dom';
import TechPow_logo from '../../resources/Logos/TechPow Logo.png';
import twitter from '../../resources/icons/twitter.svg';
import facebook from '../../resources/icons/facebook.svg';
import linkedin from '../../resources/icons/linkedin.svg';
import instagram from '../../resources/icons/instagram.svg';

import './style.css';

function Footer() {
    return (
        <footer>
            <div className="flex-footer">
                <div>
                    <img src={TechPow_logo} alt="TechPow Logo" className="head-logo foot-logo" />
                </div>
                <div className="flex-footer-links">
                    <nav>
                        <ul>
                            <Link to="/Home" className
                                ="foot-link">Home</Link>
                            <a href="#bg-primary" className
                                ="foot-link">Get Invlolved</a>
                            <Link to="/Contact" className
                                ="foot-link">Contact</Link>
                        </ul>
                    </nav>
                </div>
                <div className="sm-footer">
                    <div className="sm-footer-icon">
                        <img src={facebook} alt="facebook-icon" className="sms-icon" />
                    </div>
                    <div className="sm-footer-icon">
                        <img src={twitter} alt="twitter-icon" className="sms-icon" />
                    </div>
                    <div className="sm-footer-icon">
                        <img src={linkedin} alt="linkedin-icon" className="sms-icon" />
                    </div>
                    <div className="sm-footer-icon">
                        <img src={instagram} alt="instagram-icon" className="sms-icon" />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy;2021 TechPow. All Rights Reserved</p>
            </div>
        </footer>

    );
}

export default Footer;