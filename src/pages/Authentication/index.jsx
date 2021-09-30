import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../components/Layout/DefaultLayout';

//import styles
import './style.css';

function Authentication() {
    return (
        <DefaultLayout>
            <div className="bg-pattern">
                <div className="center-form OTP-form new-pwd-form">
                    <div className="form-container fg-pwd container-padding">
                        <h1 className="fg-text">Authentication Required</h1>
                        <p>We've sent a One Time Password (OTP) to the email <span className="blue-text">ent********122@gmail.com</span></p>
                        <form method="post">
                            <label for="otp">Enter OTP</label>
                            <input type="tel" name="OTP" id="OTP" className="form-control pwd-field" />
                            <button type="submit" className="btn-primary reset">Continue</button>
                        </form>
                        <p className="ver-code">Did not receive email verification code? <Link to="#" className="blue-link"><span className="blue-text">Resend OTP</span></Link></p>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Authentication;