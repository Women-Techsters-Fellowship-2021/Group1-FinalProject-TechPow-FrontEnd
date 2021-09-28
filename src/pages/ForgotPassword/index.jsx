import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import forgotPassword from '../../resources/icons/Forget Password.svg';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

//import styles
import './style.css';

function ForgotPassword() {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const ConfirmUserEmail = ({ reset_email }) => {

        let user_email = {
            email: reset_email
        }
        axios.get(`https://localhost:44326/api/v1/Auth/GetUserEmail?Email=${reset_email}`)
            .then(result => {
                if (result.data.success) {
                    console.log(result.data);
                    history.push('/Authentication');
                    axios.post('https://localhost:44326/api/v1/ResetPassword/SendOTPCode', user_email)
                        .then(result => {
                            console.log(result);
                            if (result.status == 200) {
                                toast.success(result.data);
                            }
                            toast.error(result.data.message);
                        })
                        .catch(error => {
                            toast.error(error.response.data.message);
                        })
                }
            });
    }
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
                            <button type="submit" className="btn-primary reset">Reset password</button>
                            <p>Remember your password? <Link to="/Login" className="green"><span className="green">Login</span></Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </DefaultLayout>
    );
}

export default ForgotPassword;