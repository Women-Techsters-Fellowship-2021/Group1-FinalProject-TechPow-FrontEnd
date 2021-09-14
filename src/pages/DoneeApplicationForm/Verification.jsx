import React from 'react';
import Vector from '../../resources/icons/Vector.svg';

function Verification() {
    return (
        <div className="donee-form verification">
            <div className="upload-section">
                <div className="upload-btn-group">
                    <label asp for="Passport"> Passport</label>
                    <button className="upload-btn"><img src={Vector} alt="" className="upload-icon" /> <p>Upload your passport Photograph</p></button>
                </div>
            <div className="upload-btn-group">
                <label asp for="Letter">Letter of Recommendation</label>
                <button className="upload-btn"><img src={Vector} alt="" className="upload-icon" /> <p>Upload letter of recommendation</p></button>
            </div>
            <div className="upload-btn-group">
                <label asp for="NationalID"> National Identity Card</label>
                <button className="upload-btn"><img src={Vector} alt="" className="upload-icon" /> <p>Upload a copy of your National identity card</p></button>
            </div>
        </div>

        <div>
            <div>
                <h4>
                    Please acknowledge the following terms and conditions required for participation in this program.
                </h4>
            </div>
            <div className="agreement-div">
                <input type="checkbox" name="terms" id="terms" />
                <p>
                    By clickling this box, I agree to the following:
                </p>
                <p>
                    I understand that applicant must be at least 18 years and confirm that I am 18 years old or older; <br />I understand that if I receive the device, I must use it to acquire digital skills;<br />I agree that I will share my training progress with TechPow and Donor once in a month till the completion of the training.
                </p>
            </div>
            <div className="agreement-div">
                <input type="checkbox" name="agreement" id="agreement" />
                <p>I also agree that by requesting for a device, I agree to be bound by TechPow’s Terms of Use and Privacy Policy</p>
            </div>
            <div className="signature">
                <label asp for="Signature">
                    Please type your full legal name here as your signature agreeing to all previous statements in this form.
                </label>
                <input type="text"
                />
                </div>
            </div>

            <div className="form-login-btn">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
}

export default Verification;