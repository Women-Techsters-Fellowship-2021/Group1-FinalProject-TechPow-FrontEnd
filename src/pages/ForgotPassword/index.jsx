import React from 'react';
import forgotPassword from '../../resources/icons/Forget Password.svg';
import DefaultLayout from '../../components/Layout/DefaultLayout';

//import styles
import './style.css';

function ForgotPassword() {
    return (
        <DefaultLayout>
            <div className="bg-pattern">
                <div className="center-form">
                    <div className="form-container fg-pwd">
                        <img src={forgotPassword} alt="" className="md-icon" />
                        <h1 className="fg-text">Forgot Password?</h1>
                        <p>Enter the email associated with your account.</p>
                        {/* <div className="show-warn">
                            <p className="light-red">This email is not associated with an account. Please try a different email.</p>
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                            />
                        </div>
                        <button type="reset" className="btn-primary reset">Reset password</button>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default ForgotPassword;