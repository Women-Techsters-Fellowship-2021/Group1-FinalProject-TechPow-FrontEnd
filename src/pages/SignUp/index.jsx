import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    const history = useHistory();

    function registerUser({ firstname, lastname, email, password, confirmPassword, role })
{
        if (!email) 
        {
            return toast.error("Please provide an email");
        }
        if (!password) 
        {
            return toast.error("Please provide a password");   
        }
        if (password !== confirmPassword) 
        {
            return toast.error("Passwords don't match");
        }
        if (!role)
        {
            return toast.error("Select your action from the dropdown");
        }

        //create a new user object and post to the provided API
        const newUser = {
            FirstName : firstname,
            LastName : lastname,
            email : email,
            password : password,
            ConfirmPassword : confirmPassword,
            role : role
        };

        fetch('https://localhost:44326/api/v1/Auth/Register',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
        .then((res) => res.json())
        .then((result) => {
            if (result.error)
            {
                alert(result.message);
                return true;
                //do a dispatch and push history to login
                //catch errors
            }
        })
    )

    return (
        <div className="form-container">
            <h2 className="form-head">Sign up</h2>
            <div className="sm-signup">
                <div className="sm-signup-icon">
                    <img src={google} alt="google-icon" className="xms-icon"/><span>with Google</span>
                </div>
                <div className="sm-signup-icon">
                    <img src={facebook} alt="facebook-icon" className="xms-icon"/><span>with Facebook</span>   
                </div>
                <div className="sm-signup-icon">
                    <img src={linkedin} alt="linkedin-icon" className="xms-icon"/><span>with Linkedin</span>
                    
                </div>
            </div>

            <div className="form-mid-div"><strong>OR</strong></div>

            <div class="col-md-4">
                <form id="form-group" method="post" onSubmit={handleSubmit(registerUser)}>
                    <div class="form-group">
                        <label asp-for="FirstName">FirstName</label>
                        <input 
                            type="text" 
                            name="FirstName" 
                            id="FirstName" 
                            class="form-control"
                            {...register('Firstname', {required: true}
                            )} 
                        />
                    </div>
                    <div class="form-group">
                        <label asp-for="LastName">LastName</label>
                        <input 
                            type="text" 
                            name="LastName" 
                            id="LastName" 
                            class="form-control"
                            {...register('Lastname', {required: true}
                            )}
                        />
                    </div>
                    <div class="form-group">
                        <label asp-for="Email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            class="form-control"
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
                            {...register('password', {required: true}
                            )}
                        />
                    </div>
                    <div class="form-group">
                        <label asp-for="ConfirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            name="ConfirmPassword" 
                            id="ConfirmPassword" 
                            class="form-control" 

                            {...register('ConfirmPassword', {required: true}
                            )}
                        />
                        <img src={show} alt="" className="sm-icon show-icon" />
                    </div>
                    <div className="drop-down">
                        <label htmlFor="roles">Apply as:</label>
                        <select name="role" id="role" {...register('role', {required: true})}>
                            <option value="A Donor">A Donor</option>
                            <option value="A Donee">A Donee</option>
                            <option value="A Volunteer/NGO">A volunteer/NGO</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className="terms">
                <input type="checkbox" name="terms-and-conditions" id="checkbox" />
                <p>By signing up, you agree to the <strong className="bold-text">Terms of Service </strong>and <strong className="bold-text">Privacy Policy</strong>.</p>
            </div>
            <div className="last-flex">
                <button type="submit" class="btn btn-primary">Create Account</button>
                <p>Already have an account? <span className="green">Log in</span></p>
            </div>
        </div>
    );
}