import React from 'react';
//import { useForm } from 'react-hook-form';
//import { useHistory } from 'react-router-dom';
//import { toast } from 'react-toastify';
//import axios from 'axios';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import Sidebar from '../../components/Sidebar';
import Vector from '../../resources/icons/Vector.svg';

import './style.css';

function DoneeApplication() {
    return (
        <DefaultLayout>
            <div className="bg-pattern">
                <div className="app-page-container">
                    <div className="application-page-header">
                        <div className="app-header-text">
                            <h2><span className="green appname">Welcome To T</span><span className="appname">ech</span><span className="green appname">P</span><span className="appname">ow</span></h2>
                        </div>
                        <div>
                            <p>Please tell us about yourself and why you need a device.We aim to ensure that everyone has access to technical devices.</p>
                        </div>
                    </div>
                    <div>
                        <a href="/LandingPage"> Back to home</a>
                    </div>
                    <div className="donee-app-form">
                        <div>
                            <Sidebar />
                        </div>
                        {/* SECTION 1 */}
                        {/* PersonalInformation */}
                        {/* START */}

                        <div className=" donee-form">
                            <div>
                                <div className="form-input">
                                    <label asp for="FullName">Full Name</label>
                                    <input type="text"
                                    />
                                </div>

                                <div className="form-input">
                                    <label asp for="HomeAddress">Home Address</label>
                                    <input type="text"
                                    />
                                </div>
                                <div className="form-input">
                                    <label asp for="Phonenumber">Phone Number</label>
                                    <input type="text"
                                        placeholder="+234xxxxxxxxxx"
                                    />
                                </div>
                            </div>
                            {/* Second column div */}
                            <div>
                                <div className="form-input">
                                    <label HtmlFor="Education">Education level</label>
                                    <select name="Education" id="education">
                                        <option value="Egypt"> Senior Secondary School</option>
                                        <option value="Ghana"> University</option>
                                        <option value="Kenya"> Masters</option>
                                    </select>
                                </div>
                                <div className="form-input">
                                    <label asp for="Phonenumber">Phone Number</label>
                                    <input type="text"
                                        placeholder="+234xxxxxxxxxx"
                                    />
                                </div>
                                <div className="form-input">
                                    <label HtmlFor="Gender">Gender</label>
                                    <select name="Gender" id="gender">
                                        <option value="Female"> Female</option>
                                        <option value="Male"> Male</option>
                                    </select>
                                </div>
                                <div className="form-input">
                                    <label HtmlFor="Country">Country</label>
                                    <select name="Country" id="country">
                                        <option value="Egypt"> Egypt</option>
                                        <option value="Ghana"> Ghana</option>
                                        <option value="Kenya"> Kenya</option>
                                        <option value="Nigeria"> Nigeria</option>
                                        <option value="SouthAfrica"> SouthAfrica</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-login-btn">
                                <button type="submit" className="btn btn-primary">Next</button>
                            </div>
                        </div>

                    </div>

                </div>
                {/*END  */}

                {/* SECTION 2 */}
                {/* Donation */}
                {/* START */}
                <div className=" donee-form">

                    <div>
                        <div className="form-input">
                            <label HtmlFor="ItemNeeded">What do you need?</label>
                            <select name="ItemNeeded" id="ItemNeeded">
                                <option value="Phone"> Phone</option>
                                <option value="Laptop"> Laptop</option>
                                <option value="Internet Data"> Internet Data</option>
                            </select>
                        </div>
                        <div className="form-input">
                            <label asp for="OrganisationSite">Provide organisation address</label>
                            <input type="text"
                            />
                        </div>
                        <div className="form-input">
                            <label asp for="ReasonforNeed">Give a brief need why you need the item</label>
                            <textarea name="ReasonforNeed" id="ReasonforNeed" cols="30" rows="10"></textarea>
                        </div>
                    </div>

                    {/* Second column div */}
                    <div>
                        <div className="form-input">
                            <label asp for="OrganisationName">What organisation is running the program</label>
                            <input type="text"
                            />
                        </div>
                        <div className="form-input">
                            <label asp for="OrganisationContact">Provide organisation contact details</label>
                            <input type="text"
                            />
                        </div>
                    </div>
                    <div className="form-login-btn">
                        <button type="submit" className="btn btn-primary">Next</button>
                    </div>

                    {/*END  */}


                </div>
                {/* SECTION 3 */}
                {/* Verifcation */}
                {/* START */}
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
                            <h4>Please acknowledge the following terms and conditions required for participation in this program.
                            </h4>
                        </div>
                        <div className="agreement-div">
                            <input type="checkbox" name="terms" id="terms" />
                            <p>By clickling this box, I agree to the following:

                                I understand that applicant must be at least 18 years and confirm that I am 18 years old or older; <br />I understand that if I receive the device, I must use it to acquire digital skills;<br />I agree that I will share my training progress with TechPow and Donor once in a month till the completion of the training.</p>
                        </div>
                        <div className="agreement-div">
                            <input type="checkbox" name="agreement" id="agreement" />
                            <p>I also agree that by requesting for a device, I agree to be bound by TechPow’s Terms of Use and Privacy Policy</p>
                        </div>
                        <div className="signature">
                            <label asp for="Signature">Please type your full legal name here as your signature agreeing to all previous statements in this form. * </label>
                            <input type="text"
                            />
                        </div>
                    </div>
                    <div className="form-login-btn">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                {/*END  */}
            </div>
        </DefaultLayout >
    );
}

export default DoneeApplication;