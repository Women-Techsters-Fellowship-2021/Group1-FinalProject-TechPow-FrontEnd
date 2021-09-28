import React from 'react';
//importing the styles
//import './styles.css';

function EmailVerification() {
    return (
        <div className="bg-pattern">
            <div className="center-form">
                <div className="form-container container-padding">
                    <hi className="fg-text">Identity Verification</hi>
                    <p>Verification in progress<span className="blue-text">ent********122@gmail.com</span> </p>
                    <form method="Post">
                        <label>Is your email still in use, kindly confirm</label>
                        <button type="submit" className="btn-primary reset">Reset password</button>

                    </form>


                </div>

            </div>

        </div>

    );
}
export default EmailVerification;;