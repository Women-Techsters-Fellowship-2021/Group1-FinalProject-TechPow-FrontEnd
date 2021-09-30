import { Link } from 'react-router-dom';
import React from 'react';
import ThankyouImage from '../../resources/images/Group.png';
import './style.css';


function ThankyouCard() {
    return (
        <div className="thankyou-page">
            <div className="thankyou-card">
                <Link to="/LandingPage"><button className="close-btn">X</button></Link>
    
                <div className="thankyou-content">
                    <img className="thankyouimage" src={ThankyouImage} alt="" />

                    <div className="thankyou-right-flex">
                        <div className="thankyou-div">
                            <h2 className="center-text">Thanks</h2>
                            <p className="blue-text thankyou-para">Our Team will review your application and will let you know about the result within approximately 20 days.
                            </p>
                        </div>
                        <div className="proceed-btn">
                            <Link to="/LandingPage"><button className="btn btn-primary">Process to HomePage </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ThankyouCard;