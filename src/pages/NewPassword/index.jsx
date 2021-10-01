import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AppContext } from '../../components/AppStateProvider';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import axios from 'axios';


//import styles
import './style.css';

function CreateNewPassword() {
    const { register, handleSubmit } = useForm();
    const { state: { userEmail, userOTP } } = useContext(AppContext);
    const history = useHistory();

    const HandleResetPassword = ({ password, confirmpassword }) => {
        if (password !== confirmpassword) {
            return toast.error("Passwords don't match");
        }
        const newResetPassword = {
            email: userEmail,
            otp: userOTP,
            newPassword: password
        };

        const usermail = {
            email: userEmail
        }
        console.log(newResetPassword)

        axios.post('https://localhost:44326/api/v1/ResetPassword/ResetPassword', newResetPassword)
            .then(result => {
                console.log(result);
                if (result.data.success) {
                    toast.success(result.data.message);
                    history.push('/Login');
                    return;
                }
                toast.error(result.data.message);
                axios.post('https://localhost:44326/api/v1/ResetPassword/SendOTPCode', usermail)
                    .then(result => {
                        console.log(result);
                        if (result.status === 200) {
                            toast.success(result.data);
                            history.push('/Authentication')
                        }
                        toast.error(result.data.message);
                    })
                    .catch(error => {
                        toast.error(error.response.data.message);
                    })
            })
            .catch(error => {
                toast.error(error.response.data.message);
            })

    }

    return (
        <DefaultLayout>
            <div className="bg-pattern">
                <div className="center-form new-pwd-form">
                    <div className="form-container container-padding">
                        <h1 className="fg-text">Create new password</h1>
                        <p>We will ask for this password whenever you want to log in.</p>
                        <form method="post" onSubmit={handleSubmit(HandleResetPassword)}>
                            <div className="create-pwd-box">
                                <label>New Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control pwd-field"
                                    required
                                    {...register('password', { required: true })}

                                />
                            </div>
                            <div className="create-pwd-box">
                                <label>Re-enter Password</label>
                                <input
                                    type="password"
                                    name="confirmpassword"
                                    id="confirmpassword"
                                    className="form-control pwd-field"
                                    required
                                    {...register('confirmpassword', { required: true })}
                                />
                            </div>
                            <button type="submit" className="btn-primary reset fg-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default CreateNewPassword;