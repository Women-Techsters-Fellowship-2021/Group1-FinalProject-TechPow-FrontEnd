import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../components/Layout/DefaultLayout';

//import styles
import './style.css';

//import image
import ladyImage from  '../../resources/images/Donee Application.png';
import doneeFlowImg from '../../resources/images/Donee Process.svg';
import imgCheck from '../../resources/icons/Circles.svg';

function Home() {
    return (
        <DefaultLayout>
            <div className="home-page">
                <section>
                    <div className="container">
                        <div className="split">
                            <div>
                                <h1 className="banner-text home-banner-text">
                                    Your Journey in Tech Begins Now
                                </h1>
                                <div className="green-line"></div>
                                <p className="home-banner-para">Request a technical device to fulfil your dreams.</p>
                                <Link to="/DoneeApplication">
                                    <button className="btn-primary home-btns">
                                    Get Started
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <img src={ladyImage} alt="" className="home-imgOne" />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="bg-primary">
                        <div className="bg-primary-para">
                            <p>
                                TechPow is a non-profit that expands access to digital devices for everyone in Africa.
                                We are on a mission to help millions of people own a device. Could you be one?
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="donee-flow">
                            <div className="donee-flow-img">
                                <img src={doneeFlowImg} alt="" />
                            </div>
                            <div className="div-home-btn apply-now">
                                <Link to="/DoneeApplication">
                                    <button className="btn-primary home-btns">
                                    Apply now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="bg-primary eligibility-container">
                        <h2 className="eligibility-header">Here's what you need to qualify</h2>
                        <div className="container">
                            <div className="eligibility-section">
                                <div className="img-check">
                                    <img src={imgCheck} alt="" className
                                    ="xxms-icon" />
                                    <p className="eligibility-text">
                                        You must be living in any of these countries - Egypt, Kenya, Ghana, Nigeria, and South Africa.
                                    </p>
                                </div>
                                <div className="img-check">
                                    <img src={imgCheck} alt="" className
                                    ="xxms-icon" />
                                    <p className="eligibility-text">
                                        You must be 18years old and above.
                                    </p>
                                </div>
                                <div className="img-check">
                                    <img src={imgCheck} alt="" className
                                    ="xxms-icon" />
                                    <p className="eligibility-text">
                                        You must use this device to acquire digital skills.
                                    </p>
                                </div>
                            </div>
                            <div className="div-home-btn">
                                <Link to="/DoneeApplication">
                                    <button className="btn-primary home-btns eligibility-btn">
                                    I understand, let me fill out an application
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DefaultLayout>
    );
}

export default Home;