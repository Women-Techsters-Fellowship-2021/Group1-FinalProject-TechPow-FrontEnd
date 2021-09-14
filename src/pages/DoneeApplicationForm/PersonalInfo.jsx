import React from 'react';

function PersonalInfo() {
    return (

        <div className="donee-app-form">
            {/* <div>
                    <TabNav />
                </div> */}

            <div className=" donee-form">
                <div>
                    <div className="form-input">
                        <label asp for="FullName">Full Name</label>
                        <input type="text" name="fullname" id="fullname" />
                        <span className="notify">Please enter a legal name here. We will ask or your preferred name later.</span>
                    </div>
                    <div className="form-input">
                        <label asp for="Phonenumber">Phone Number</label>
                        <input
                            type="tel"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder="+234xxxxxxxxxx"
                        />
                    </div>
                </div>

                <div>
                    <div className="form-input">
                        <label asp for="Dob">Date of Birth</label>
                        <input type="text" name="dob" id="dob" placeholder="MM/DD/YYYY" />
                        <span className="notify">Please Note: To make a donation request, you must be 18 years or above.</span>
                    </div>
                    <div className="form-input">
                        <label HtmlFor="Gender">Gender</label>
                        <select name="Gender" id="gender">
                            <option value="Female"> Female</option>
                            <option value="Male"> Male</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div className="form-input">
                        <label asp for="HomeAddress">What is your home address?</label>
                        <input type="text" name="dob" id="dob" placeholder="MM/DD/YYYY" />
                        <span className="notify">Please Note: To make a donation request, you must be 18 years or above.</span>
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

                <div>
                    <div className="form-input">
                        <label HtmlFor="Education">Education level</label>
                        <select name="Education" id="education">
                            <option value="Egypt"> Senior Secondary School</option>
                            <option value="Ghana"> University</option>
                            <option value="Kenya"> Masters</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div className="form-login-btn form-input">
                        <button type="submit" className="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PersonalInfo;