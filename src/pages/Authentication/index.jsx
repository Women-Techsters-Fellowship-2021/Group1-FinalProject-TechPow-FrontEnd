import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';

//import styles
import './style.css';

function Authentication() {
    return (
        <DefaultLayout>
            <div className="bg-pattern">
                <div className="center-form">
                    <div className="form-container container-padding">
                        <h1 className="fg-text">Authentication Required</h1>
                        <p>We've sent a One Time Password (OTP) to the email <span className="blue-text">ent********122@gmail.com</span></p>
                        <form method="post">
                            <label htmlFor="otp">Enter OTP</label>
                            <input type="tel" name="OTP" id="OTP" className="form-control pwd-field"  />
                            <button type="submit" className="btn-primary reset">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Authentication;