import React from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../AppStateProvider';

//import styles
import './style.css';

//import logo
import TechPow_logo from '../../resources/Logos/TechPow Logo.png';

function Navbar() {
    const { state, dispatch } = useContext(AppContext);
    const history = useHistory();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/LandingPage');
    }

    return (
        <header>
            <div className="containe">
                <div className="flex-header">
                    {!state.isLoggedIn ? (
                        <>
                            <div>
                                <Link to="/">
                                    <img src={TechPow_logo} alt="TechPow Logo" className="head-logo" />
                                </Link>
                            </div>
                            <div className="flex-header-links">
                                <nav>
                                    <ul>
                                        <Link to="/About" className
                                            ="head-link">About</Link>
                                        <Link to="/GetInvolved" className
                                            ="head-link">Get Invlolved</Link>
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
                                <button className="btn-primary login-btn">
                                    <a href="/SignUp" className
                                        ="login-btn">Sign Up</a>
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
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
                                <button className="btn-primary login-btn" onClick={logout}>
                                    Logout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </header >

    );
}

export default Navbar;