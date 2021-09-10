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
                                    <label htmlFor="Fullname">FullName</label>
                                    <input type="text" name="fullname" id="fullname" className="form-field" required />
                                </div>
                                <div>
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" name="email" id="email" className="form-field" required />
                                </div>
                            </div>
                            <div className="form-box">
                                <div>
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" name="fullname" id="fullname" className="form-field" required />
                                </div>
                                <div>
                                    <label htmlFor="topic">Topic</label>
                                    <select name="topic" id="topic" className="form-field" required>
                                        <option value="--None">--None--</option>
                                        <option value="Get Started/About TechPow">Get Started/ About TechPow</option>
                                        <option value="Choosing a donee">Choosing a donee</option>
                                        <option value="Donstion">Donation</option>
                                        <option value="Email and Password Problem">Email and Password Problem</option>
                                        <option value="Report a bug and TroubleShooting">Report a bug and TroubleShooting</option>
                                        <option value="Report abuse">Report abuse</option>
                                        <option value="Feedback and feature requiest">Feedback and Feature request</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-area">
                                <label htmlFor="help">How can we help you?</label>
                                <textarea name="help" id="help" cols="60" rows="10" className="last-field"></textarea>
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