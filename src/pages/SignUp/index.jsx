import React from 'react';

//import styles
import './style.css';

//import icon
import show from '../../resources/icons/Show.svg';

//import social-media icons
import google from '../../resources/icons/google.svg';
import facebook from '../../resources/icons/facebook.svg';
import linkedin from '../../resources/icons/linkedin.svg';

function Signup() {
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
            <form id="form-group" method="post">
                <div class="form-group">
                    <label asp-for="FirstName">FirstName</label>
                    <input type="text" name="FirstName" id="FirstName" class="form-control" />
                </div>
                <div class="form-group">
                    <label asp-for="LastName">LastName</label>
                    <input type="text" name="LastName" id="LastName" class="form-control" />
                </div>
                <div class="form-group">
                    <label asp-for="Email">Email</label>
                    <input type="email" name="email" id="email" class="form-control" />
                </div>
                <div class="form-group">
                    <label asp-for="Password">Password</label>
                    <input type="password" name="password" id="password" class="form-control"/>
                </div>
                <div class="form-group">
                    <label asp-for="ConfirmPassword">Confirm Password</label>
                    <input type="password" name="ConfirmPassword" id="ConfirmPassword" class="form-control" />
                    <img src={show} alt="" className="sm-icon show-icon" />
                </div>
            </form>
        </div>
        <div className="terms">
            <input type="checkbox" name="terms-and-conditions" id="checkbox" />
            <p>By signing up, you agree to the <strong className="bold-text">Terms of Service </strong>and <strong className="bold-text">Privacy Policy</strong>.</p>
        </div>
        <button type="submit" class="btn btn-primary">Create Account</button>
        <div>
            <p>Already have an account? <span className="green">Log in</span></p>
        </div>
    </div>
  );
}

export default Signup;