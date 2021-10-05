import React, { useContext, useState } from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../components/AppStateProvider';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import axios from 'axios';
import { css } from "@emotion/react";
import  BeatLoader from "react-spinners/BeatLoader";

//import styles
import './style.css';

const overrride = css`
    display: block;
    margin: 0 auto;
    border-color: navy;
`;

function CreateNewPassword() {
    const [loading, setLoading] = useState(false);
    const [color] = useState("navy");
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

        axios.post('https://donationappwebapi20211005103856.azurewebsites.net/api/v1/ResetPassword/ResetPassword', newResetPassword)
            .then(result => {
                console.log(result);
                if (result.data.success) {
                    toast.success(result.data.message);
                    history.push('/Login');
                    return;
                }
                toast.error(result.data.message);
                axios.post('https://donationappwebapi20211005103856.azurewebsites.net/api/v1/ResetPassword/SendOTPCode', usermail)
                    .then(result => {
                        console.log(result);
                        if (result.status === 200) {
                            toast.success(result.data);
                            history.push('/Authentication');
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

    const displayLoader = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading({ loading: false});
        }, 1000)
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
                            <div className="sweet-loading">
                                <button type="submit" className="btn btn-primary reset fg-btn" onClick={displayLoader} disabled={loading}>
                                    { loading && (<div><BeatLoader color={color} css={overrride} size={15} />
                                                </div>)}
                                    { !loading && <span>Submit</span>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default CreateNewPassword;