import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';

//import styles
import './style.css';

//import image
import ladyImage from  '../../resources/images/Donne1.png';
import imgCheck from '../../resources/icons/Circles.svg';

function Home() {
    return (
        <DefaultLayout>
            <div className="home-page">
                <section>
                    <div className="split">
                        <div>
                            <h1 className="banner-text">
                                Your journey in tech begins now
                            </h1>
                            <p>Request a technical device to fulfil your dreams.</p>
                            <button className="btn-primary">
                                Get Started
                            </button>
                        </div>
                        <div>
                            <img src={ladyImage} alt="" />
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
                    <div>
                        <div className="donee-flow-img">
                            <img src="doneeFlowImg" alt=""/>
                        </div>
                        <div>
                            <button className="btn-primary">
                                Apply now
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Here's what you need to qualify</h2>
                    <div className="eligibility-section">
                        <div className="img-check">
                            <img src={imgCheck} alt="" className
                            ="xms-icon" />
                            <p className="eligibility-text">
                                You must be living in any of these countries - Egypt, Kenya, Ghana, Nigeria, and South Africa.
                            </p>
                        </div>
                        <div className="img-check">
                            <img src={imgCheck} alt="" className
                            ="xms-icon" />
                            <p className="eligibility-text">
                                You must be 18years old and above.
                            </p>
                        </div>
                        <div className="img-check">
                            <img src={imgCheck} alt="" className
                            ="xms-icon" />
                            <p className="eligibility-text">
                                You must use this device to acquire digital skills.
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="btn-primary">
                            I understand, let me fill out an application
                        </button>
                    </div>
                </section>
            </div>
        </DefaultLayout>
    );
}

export default Home;