import { Link } from 'react-router-dom';
import React from 'react';
import ThankyouImage from '../../resources/images/Group.png';
import './style.css';


function ThankyouCardDonor() {
    return (
        <div className="thankyou-page">
            <div className="roundbtn-div">
                <Link to="/LandingPage"><button className="close-btn">X</button></Link>
            </div>
            <div className="thankyou-content">
                <div className="thankyou-div">
                    <img className="thankyouimage" src={ThankyouImage} alt="" />
                </div>
                <div className="thankyou-div">
                    <h2 className="center-text">Thanks</h2>
                    <p className="blue-text">Details of our onsite address would be sent<br />to your email. Kindly check your mail.
                    </p>
                </div>

            </div>
            <div className="proceed-btn">
                <Link to="/LandingPage"><button className="btn btn-primary">Process to HomePage </button></Link>
            </div>

        </div >
    );


}
export default ThankyouCardDonor;