import { Link } from 'react-router-dom';
import React from 'react';
import ThankyouImage from '../../resources/images/Group.png';
import './style.css';




function ThankyouCardDonor() {
    return (
        <React.Fragment>
            <div className="thankyou-page">
                <div className="thankyou-card">
                    <Link to="/LandingPage"><button className="close-btn">X</button></Link>
        
                    <div className="thankyou-content">
                        <img className="thankyouimage" src={ThankyouImage} alt="" />

                        <div className="thankyou-right-flex">
                            <div className="thankyou-div">
                                <h2 className="center-text">Thanks</h2>
                                <p className="blue-text thankyou-para">Details of our onsite address would be sent to your email. Kindly check your mail.
                                </p>
                            </div>
                            <div className="proceed-btn">
                                <Link to="/LandingPage"><button className="btn btn-primary">Process to HomePage </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );


}
export default ThankyouCardDonor;