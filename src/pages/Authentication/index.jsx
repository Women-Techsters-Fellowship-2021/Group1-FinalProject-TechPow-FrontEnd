import React from 'react';
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
                <div className="center-form">
                    <div className="form-container container-padding">
                        <h1 className="fg-text">Authentication Required</h1>
                        <p>We've sent a One Time Password (OTP) to the email <span className="blue-text">ent********122@gmail.com</span></p>
                        <form method="post" onSubmit={handleSubmit(handleOTP)}>
                            <label for="otp">Enter OTP</label>
                            <input type="tel" name="OTP" id="OTP"
                                register
                                className="form-control pwd-field"
                                {...register('otp', { required: true }
                                )}
                            />
                            <button type="submit" className="btn-primary reset">Continue</button>
                        </form>
                        <p>Did not receive email verification code? <span className="blue-text">Resend OTP</span></p>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Authentication;