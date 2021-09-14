import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../../components/AppStateProvider';
import DefaultLayout from '../../components/Layout/DefaultLayout';


//import social-media icons
import google from '../../resources/icons/google.svg';
import facebook from '../../resources/icons/facebook.svg';
import linkedin from '../../resources/icons/linkedin.svg';

//import icon
import portrait from '../../resources/icons/person-bounding-box.svg';

//import styles
import './style.css'

function Login() {
    const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
    const history = useHistory();

    const loginUser = ({ email, password }) => {

        let userlogin = {
            email: email,
            password: password,
        }

        axios.post('https://localhost:44326/api/v1/Auth/Login',
            userlogin)
            .then(result => {
                if (result.data.success) {
                    console.log(result.data);
                    toast.success('Welcome! ' + result.data.data.firstName + ' ' + result.data.data.lastName);
                    context.dispatch({
                        type: 'LOGIN',
                        payload: {
                            isLoggedIn: true,
                            userEmail: userlogin.email,
                        },
                    })
                    if (result.data.data.typeofUser == "Donee") {
                        history.push('/Home');
                    }
                    return true;
                }
                toast.error(result.data.message);
            })
            .catch(error => {
                toast.error(error.response.data.message);
            })

    }


    return (
        <DefaultLayout>
            <div className="bg-pattern">
                <div className="home-link">
                    <Link to="/Home" className="back-to-link">Back to home</Link>
                </div>
                <div className="top-login-section">
                    <img src={portrait} alt="" id="portrait" />
                    <h2>Welcome back!</h2>
                    <p>Login the way you did last time to avoid creating a second TechPow account.</p>
                </div>
                <div className="form-container">
                    <h2 className="form-head">Login</h2>
                    <div className="sm-login">
                        <div className="sm-login-icon">
                            <img src={google} alt="google-icon" className="xms-icon" /><span>with Google</span>
                        </div>
                        <div className="sm-login-icon">
                            <img src={facebook} alt="facebook-icon" className="xms-icon" /><span>with Facebook</span>
                        </div>
                        <div className="sm-login-icon">
                            <img src={linkedin} alt="linkedin-icon" className="xms-icon" /><span>with Linkedin</span>

                        </div>
                    </div>
                    <div className="form-mid-div"><strong>OR</strong></div>
                    <div className="col-md-4">
                        <form id="form-group" method="post" onSubmit={handleSubmit(loginUser)}>
                            <div className="form-group">
                                <label asp-for="Email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    {...register('email', { required: true }
                                    )}
                                />
                            </div>
                            <div className="form-group">
                                <label asp-for="Password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    {...register('password', { required: true }
                                    )}
                                />

                            </div>
                            <div className="terms">
                                <input type="checkbox" name="remember-me" id="remember-me" />
                                <p>Remember me</p>
                                <a href="/ForgotPassword" className=" red   green-span">Forgot Password?
                                </a>
                            </div>
                            <div className="form-login-btn">
                                <button type="submit" className="btn btn-primary">Log in</button>
                            </div>
                            <div className="alternative-signup">
                                <span className="txt1">
                                    Don’t have an account?
                                </span>
                                <a href="/Signup" className="green txt1">
                                    Sign up here!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Login;