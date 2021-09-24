import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';

//import styles
import './style.css';

function Contact() {
    return (
        <DefaultLayout>
            <div className="bg-pattern">
                <div className="contact-page">
                    <div className="contact-text">
                        <h2>Contact Us</h2>
                        <p>Questions? Suggestions? We would love to hear from you. Do not hesitate to reach out.</p>
                        <p className="third-para">Send us a note using the form below.</p>
                    </div>
                    <div className="contact-form">
                        <form id="form-group">
                            <div className="form-box">
                                <div>
                                    <label for="Fullname">FullName</label>
                                    <input type="text" name="fullname" id="fullname" className="form-field" required />
                                </div>
                                <div>
                                    <label for="Email">Email</label>
                                    <input type="email" name="email" id="email" className="form-field" required />
                                </div>
                            </div>
                            <div className="form-box">
                                <div>
                                    <label for="subject">Subject</label>
                                    <input type="text" name="fullname" id="fullname" className="form-field" required />
                                </div>
                                <div>
                                    <label for="topic">Topic</label>
                                    <select name="topic" id="topic" className="form-field" required>
                                        <option value="--None">--None--</option>
                                        <option value="Get Started/About TechPow">Get Started/ About TechPow</option>
                                        <option value="Choosing a donee">Choosing a donee</option>
                                        <option value="Donation">Donation</option>
                                        <option value="Email and Password Problem">Email and Password Problem</option>
                                        <option value="Report a bug and TroubleShooting">Report a bug and TroubleShooting</option>
                                        <option value="Report abuse">Report abuse</option>
                                        <option value="Feedback and feature requiest">Feedback and Feature request</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box">
                                <div>
                                    <label for="help">How can we help you?</label>
                                    <textarea name="help" id="help" cols="30" rows="10" className="contact-textarea"></textarea>    
                                </div>
                                <div>
                                    <label for="topic">How are you feeling right now?</label>
                                    <select name="feeling" id="feeling" className="form-field" required>
                                        <option value="--None">--None--</option>
                                        <option value="Happy">Happy</option>
                                        <option value="Inspired">Inspired</option>
                                        <option value="Excited">Excited</option>
                                        <option value="Confused">Confused</option>
                                        <option value="Angry">Angry</option>
                                        <option value="Upset">Upset</option>
                                        <option value="Worried">Worried</option>
                                        <option value="Panic">Panic</option>
                                    </select>
                                </div>                   
                            </div>
                            <div>
                                <button type="submit" className="btn-primary last-field help-btn">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Contact;