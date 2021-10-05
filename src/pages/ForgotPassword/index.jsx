import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import forgotPassword from '../../resources/icons/Forget Password.svg';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { css } from "@emotion/react";
import  BeatLoader from "react-spinners/BeatLoader";

//import styles
import './style.css';
import { AppContext } from '../../components/AppStateProvider';

const overrride = css`
    display: block;
    margin: 0 auto;
    border-color: navy;
`;

function ForgotPassword() {
    const [loading, setLoading] = useState(false);
    const [color] = useState("navy");
    const { register, handleSubmit } = useForm();
    const { dispatch } = useContext(AppContext);
    const history = useHistory();

    const ConfirmUserEmail = ({ reset_email }) => {

        let user_email = {
            email: reset_email
        }

        dispatch({
            type: 'SAVE_EMAIL',
            payload: {
                userEmail: reset_email
            },
        })

        setLoading(true);
        
        axios.get(`https://donationappwebapi20211005103856.azurewebsites.net/api/v1/Auth/GetUserEmail?Email=${reset_email}`)
            .then(result => {
                if (result.data.success) {
                    setLoading(false);
                    console.log(result.data);
                    history.push('/Authentication');

                    axios.post('https://donationappwebapi20211005103856.azurewebsites.net/api/v1/ResetPassword/SendOTPCode', user_email)
                        .then(result => {
                            console.log(result);
                            if (result.status === 200) {
                                toast.success(result.data);
                            }
                            setLoading(false);
                            toast.error(result.data.message);
                        })
                        .catch(error => {
                            toast.error(error.response.data.message);
                        })
                }
                setLoading(false);
            });
        
    }

    return (
        <DefaultLayout>
            <div className="bg-pattern">
                <div className="center-form new-pwd-form">
                    <div className="form-container fg-pwd">
                        <img src={forgotPassword} alt="" className="md-icon" />
                        <h1 className="fg-text">Forgot Password?</h1>
                        <p>Enter the email associated with your account.</p>
                        {/* <div className="show-warn">
                            <p className="light-red">This email is not associated with an account. Please try a different email.</p>
                        </div> */}
                        <form onSubmit={handleSubmit(ConfirmUserEmail)}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="form-control"
                                    {...register('reset_email', { required: true })}
                                />
                            </div>
                            <div className="sweet-loading">
                                <button type="submit" className="btn btn-primary reset" disabled={loading}>
                                    { loading && (<div><BeatLoader color={color} css={overrride} size={15} />
                                                </div>)}
                                    { !loading && <span>Reset password</span>}
                                </button>
                            </div>
                            <p>Remember your password? <Link to="/Login" className="green"><span className="green">Login</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default ForgotPassword;