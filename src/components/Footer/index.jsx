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
                    <img src={TechPow_logo} alt="TechPow Logo" className="head-logo" />
                </div>
                <div>
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
                <div className="sm-signup">
                    <div className="sm-footer-icon">
                        <img src={facebook} alt="facebook-icon" className="xms-icon" />
                    </div>
                    <div className="sm-footer-icon">
                        <img src={twitter} alt="twitter-icon" className="xms-icon" />
                    </div>
                    <div className="sm-footer-icon">
                        <img src={linkedin} alt="linkedin-icon" className="xms-icon" />
                    </div>
                    <div className="sm-footer-icon">
                        <img src={instagram} alt="instagram-icon" className="xms-icon" />
                    </div>
                </div>
            </div>
            <div>
                <p className="copyright">&copy;2021 TechPow. All Rights Reserved</p>
            </div>
        </footer>

    );
}

export default Footer;