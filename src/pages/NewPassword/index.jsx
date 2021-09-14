import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';

//import styles
import './style.css';

function CreateNewPassword() {
    return (
        <DefaultLayout>
            <div className="bg-pattern">
            <div className="center-form">
                <div className="form-container container-padding">
                    <h1 className="fg-text">Create new password</h1>
                    <p>We will ask for this password whenever you want to log in.</p>
                    <form method="post">
                        <div className="create-pwd-box">
                            <label htmlFor="password">New Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control pwd-field"
                            />
                        </div>
                        <div className="create-pwd-box">
                            <label htmlFor="password">Re-enter Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control pwd-field"
                            />
                        </div>
                        <button type="submit" className="btn-primary reset">Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </DefaultLayout>
    );
}

export default CreateNewPassword;