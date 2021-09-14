import React from 'react';

function Request() {
    return (
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
                            <label asp for="OrganisationName">What organisation is running the program?</label>
                            <input type="text"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="form-input">
                            <label asp for="OrganisationSite">Provide organisation address</label>
                            <input type="text"
                            />
                        </div>              
                        <div className="form-input">
                            <label asp for="OrganisationContact">Provide organisation's contact details</label>
                            <input type="text"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="form-input">
                            <label asp for="ReasonforNeed">Give a brief need why you need the item</label>
                            <textarea name="ReasonforNeed" id="ReasonforNeed" cols="30" rows="10"></textarea>
                        </div>
                    </div>

                    <div className="form-login-btn">
                        <button type="submit" className="btn btn-primary">Next</button>
                    </div>
                </div>
    );
}

export default Request;