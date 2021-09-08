import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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

    const loginUser = () =>
    {
        alert("Login Successful");
    }

    return (
            <div className="login-page">
                <div className="home-link">
                    <Link to="/Home" className="back-to-link">Back to home</Link>
                </div>
                <div className="top-login-section">
                    <img src={portrait} alt="" className="mmd-icon" />
                    <h2>Welcome back!</h2>
                    <p>Login the way you did last time to avoid creating a second TechPow account.</p>
                </div>
                <div className="form-container">
                    <div className="sm-login">
                        <div className="sm-login-icon">
                            <img src={google} alt="google-icon" className="xms-icon"/><span>with Google</span>
                        </div>
                        <div className="sm-login-icon">
                            <img src={facebook} alt="facebook-icon" className="xms-icon"/><span>with Facebook</span>
                        </div>
                        <div className="sm-login-icon">
                            <img src={linkedin} alt="linkedin-icon" className="xms-icon"/><span>with Linkedin</span>
                    
                        </div>
                    </div>
                    <div className="form-mid-div"><strong>OR</strong></div>
                    <div class="col-md-4">
                        <form id="form-group" method="post" onSubmit={handleSubmit(loginUser)}>
                            <div class="form-group">
                                <label asp-for="Email">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    class="form-control"
                                    placeholder="Enter your email, e.g: janedoe@gmail.com"
                                    {...register('email', {required: true}
                                    )} 
                                />
                            </div>
                            <div class="form-group">
                                <label asp-for="Password">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    class="form-control"
                                    placeholder="Password"
                                    {...register('password', {required: true}
                                    )}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="terms">
                        <input type="checkbox" name="terms-and-conditions" id="checkbox" />
                        <input type="checkbox" name="remember-me" id="checkbox" />
                        <p>Remember me</p>
                        <span className="green green-span">Forgot Password?</span>
                    </div>
                    <div className="form-login-btn">
                        <button type="submit" class="btn btn-primary">Log in</button>
                    </div>
                    <div className="alternative-signup">
                        <span className="txt1">
                            Don’t have an account?
                        </span>
                        <a href="/Signup" className="txt2">
                            Sign up here!
                        </a>
                    </div>
                </div>
            </div>
    );
}

export default Login;