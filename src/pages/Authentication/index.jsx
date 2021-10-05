import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AppContext } from '../../components/AppStateProvider';
import { useHistory } from 'react-router';
//import styles
import './style.css';


function Authentication() {
    const { register, handleSubmit } = useForm();
    const { dispatch } = useContext(AppContext);
    const history = useHistory();

    const handleOTP = ({ otp }) => {
        dispatch({
            type: 'SAVE_OTP',
            payload: {
                userOTP: otp
            },
        })
        history.push('/CreateNewPassword');
    }

    return (
        <DefaultLayout>
            <div className="bg-pattern">
                <div className="center-form OTP-form new-pwd-form">
                    <div className="form-container fg-pwd container-padding">
                        <h1 className="fg-text">Authentication Required</h1>
                        <p>We've sent a One Time Password (OTP) to the specified email.</p>
                        <form method="post" onSubmit={handleSubmit(handleOTP)}>
                            <div className="otp-form-field">
                                <label for="otp">Enter OTP</label>
                                <input type="tel" name="OTP" id="OTP"
                                    register
                                    className="form-control pwd-field"
                                    {...register('otp', { required: true }
                                    )}
                                />
                            </div>
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