import React from 'react';
import { useForm } from 'react-hook-form';
//import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

//import styles
import './style.css';

//import icon
import show from '../../resources/icons/Show.svg';

//import social-media icons
import google from '../../resources/icons/google.svg';
import facebook from '../../resources/icons/facebook.svg';
import linkedin from '../../resources/icons/linkedin.svg';

export default function Signup() {
    const { register, handleSubmit } = useForm();
    // const history = useHistory();

    const registerUser = ({ firstname, lastname, email, password, confirmPassword, role }) => {

        if (!email) {
            // console.log("Error");
            return toast.error("Please provide an email");
        }
        if (!password) {
            return toast.error("Please provide a password");
        }
        if (password !== confirmPassword) {
            return toast.error("Passwords don't match");
        }
        if (!role) {
            return toast.error("Select your action from the dropdown");
        }

        //create a new user object and post to the provided API
        const newUser = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
            ConfirmPassword: confirmPassword,
            typeofuser: role
        };

        // console.log(newUser);
        axios.post('https://localhost:44326/api/v1/Auth/Register',
            newUser)
            .then(result => {
                console.log(result);
                if (result.data.error !== false) {
                    console.log(result.data.error);
                    toast.error(result.data.error);

                }
                toast.success('User created Sucessfully, please log in to continue!');
                return true;
                //do a dispatch and push history to login
                //catch errors
            })

    }

    return (
        <div className="form-container">
            <h2 className="form-head">Sign up</h2>
            <div className="sm-signup">
                <div className="sm-signup-icon">
                    <img src={google} alt="google-icon" className="xms-icon" /><span>with Google</span>
                </div>
                <div className="sm-signup-icon">
                    <img src={facebook} alt="facebook-icon" className="xms-icon" /><span>with Facebook</span>
                </div>
                <div className="sm-signup-icon">
                    <img src={linkedin} alt="linkedin-icon" className="xms-icon" /><span>with Linkedin</span>

                </div>
            </div>

            <div className="form-mid-div"><strong>OR</strong></div>

            <div className="col-md-4">
                <form id="form-group" onSubmit={handleSubmit(registerUser)}>
                    <div className="form-group">
                        <label asp-for="FirstName">FirstName</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="form-control"
                            {...register('firstname', { required: true }
                            )}
                        />
                    </div>
                    <div className="form-group">
                        <label asp-for="LastName">LastName</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="form-control"
                            {...register('lastname', { required: true }
                            )}
                        />
                    </div>
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
                    <div className="form-group">
                        <label asp-for="ConfirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="ConfirmPassword"
                            className="form-control"

                            {...register('confirmPassword', { required: true }
                            )}
                        />
                        <img src={show} alt="" className="sm-icon show-icon" />
                    </div>
                    <div className="drop-down">
                        <label htmlFor="roles">Apply as:</label>
                        <select name="role" id="role" {...register('role', { required: true })}>
                            <option value="Donor">Donor</option>
                            <option value="Donee">Donee</option>
                            <option value="Volunteer/NGO">Volunteer/NGO</option>
                        </select>
                    </div>
                    <div className="terms">
                        <input type="checkbox" name="terms-and-conditions" id="checkbox" />
                        <p>By signing up, you agree to the <strong className="bold-text">Terms of Service </strong>and <strong className="bold-text">Privacy Policy</strong>.</p>
                    </div>
                    <div className="last-flex">
                        <button type="submit" className="btn btn-primary">Create Account</button>
                        <p>Already have an account? <span className="green">Log in</span></p>
                    </div>
                </form>
            </div>

        </div>
    );
}

