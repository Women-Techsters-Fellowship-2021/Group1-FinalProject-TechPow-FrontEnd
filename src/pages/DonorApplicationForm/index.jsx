import React, { useContext, useState } from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../components/AppStateProvider';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/index';

//import styles
import './style.css';
import ThankyouCardDonor from '../../components/Thankyou-cardDonor';

function DonorApplication() {
    const { register, handleSubmit } = useForm();
    const { state: { Token, userId, userEmail }, dispatch, isLoggedIn } = useContext(AppContext);
    const usehistory = useHistory();
    const {show, setShow} = useState(false);

    // if (isLoggedIn === false) {
    //     toast.error("Please Login to Donate...",
    //         {
    //             position: toast.POSITION.TOP_CENTER
    //         });
    //     usehistory.push('/Login');

    // }

    const SubmitDonation = (data) => {
        let newDonation = {
            userID: userId,
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            homeAddress: data.homeAddress,
            country: data.country,
            reasonForDonation: data.reasonForDonation,
            deviceSpecification: data.deviceSpecification,
            itemOwnership: data.itemOwnership,
            deviceCondition: data.deviceCondition,
            updateRequest: data.updateRequest,
            signature: data.signature

        }

        const token = Token;
        //Call webAPI
        Axios.post('https://localhost:44326/api/v1/Donor',
            newDonation,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(result => {
                console.log(result);
                if (result.data.success) {
                    toast.success(result.data.message);
                    dispatch({
                        type: 'DONOR_APPLICATION',
                        payload: {
                            donor: newDonation,
                        },
                    })
                    let newEmail = {
                        toEmail: userEmail,
                        subject: "TechPow Application Notification",
                        body: "Dear " + userEmail + ". Thank you for completing your donation application. Our Team will review your application and will let you know about the result within approximately 20 days"
                    }

                    //Calling api for email
                    Axios.post('https://localhost:44326/api/v1/Email/SendEmail',
                        newEmail)
                        .then(result => {
                            console.log(result);
                            if (result.status === 200) {
                                return true;
                            }
                            return false;
                        }
                        );
                    usehistory.push('/Thankyou-cardDonor');
                    return true;
                }
                for (let index = 0; index < result.data.errors.length; index++) {
                    toast.error(result.data.errors[index]);
                }
            })
            .catch(error => {
                console.log(error.response.data.errors);
                for (let index = 0; index < error.response.data.errors.length; index++) {
                    toast.error(error.response.data.errors[index]);
                }

            })

    }

    return (
        <React.Fragment>
            <DefaultLayout>
                <div className="container bg-pattern donor-app-form-page">
                    <div className="container">
                        <h1 className="center-head">
                            <span className="green appname">Welcome To T</span><span className="appname">ech</span><span className="green appname">P</span><span className="appname">ow</span>
                        </h1>
                        <div className="back-link">
                            <a href="/LandingPage"> &lt; Back to home</a>
                        </div>

                        <div className="application-container">
                            <h4>Application Form</h4>

                            <div className="donor-tabpane">
                                <div className="tabs">
                                    <ol className="tab-list">
                                        <li className="tab-list-item active-donor-tab">
                                            Donation Information
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            <div className="donor-app-form">
                                <form className="donor-form" onSubmit={handleSubmit(SubmitDonation)}>

                                    <div className="form-flex">
                                        <div className="form-input-field">
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                className="donor-text-input"
                                                id="fullname" {...register('firstName', { required: true })}
                                            />
                                            <span className="notify">Please enter a legal name here.We will ask for your preferred name later.</span>
                                        </div>

                                        <div className="form-input-field">
                                            <label>Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                required
                                                className="donor-text-input"
                                                id="fullname" {...register('lastName', { required: true })}
                                            />
                                            <span className="notify">Please enter a legal name here.We will ask for your preferred name later.</span>
                                        </div>
                                    </div>

                                    <div className="form-flex">
                                        <div className="form-input-field">
                                            <label>Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phonenumber"
                                                id="phonenumber"
                                                className="donor-text-input"
                                                required
                                                placeholder="+234xxxxxxxxxx"
                                                {...register('phoneNumber', { required: true })}
                                            />
                                            <span className="notify">Please enter your phone number with your country code in the above format.</span>
                                        </div>
                                        <div className="form-input-field">
                                            <label>What is your home address?</label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="donor-text-input"
                                                required
                                                id="address" {...register('homeAddress', { required: true })} />
                                        </div>
                                    </div>

                                    <div className="form-flex">
                                        <div className="form-input-field">
                                            <label for="Country">Country</label>
                                            <select name="Country" id="country" className="donor-text-input"
                                                {...register('country', { required: true })}>
                                                <option value="Egypt"> Egypt</option>
                                                <option value="Ghana"> Ghana</option>
                                                <option value="Kenya"> Kenya</option>
                                                <option value="Nigeria"> Nigeria</option>
                                                <option value="SouthAfrica"> SouthAfrica</option>
                                            </select>
                                        </div>
                                        <div className="form-input-field">
                                            <label>Reason for giving out the item</label>
                                            <input
                                                type="text"
                                                name="donationreason"
                                                required
                                                className="donor-text-input"
                                                id="donationreason" {...register('reasonForDonation', { required: true })} />
                                        </div>
                                    </div>

                                    <div className="form-flex">
                                        <div className="form-input-field">
                                            <label for="update">Device Specification</label>
                                            <input
                                                type="text"
                                                name="devicespec"
                                                required
                                                className="donor-text-input"
                                                id="devicespec" {...register('deviceSpecification', { required: true })} />
                                        </div>
                                        <div className="form-input-field" >
                                            <label for="Ownership">Are you the owner of the device?</label>
                                            <select name="ownership"
                                                required
                                                id="ownership" className="donor-text-input" {...register('itemOwnership', { required: true })}>
                                                <option value="Yes">Yes</option>
                                                <option value="No"> No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-flex">
                                        <div className="form-input-field">
                                            <label for="Country">Device Condition</label>
                                            <select name="devicecondition" id="devicecondition" className="donor-text-input" {...register('deviceCondition', { required: true })}>
                                                <option value="New">New-Sealed in Box</option>
                                                <option value="UsedW"> Used-Working</option>
                                                <option value="UsedN/W"> Used-Not Working</option>
                                            </select>
                                            <span className="notify"><strong>Please note:</strong>You cannot donate a damaged device now. We would let you know when that option is available.</span>
                                        </div>
                                        <div className="form-input-field">
                                            <label for="update">Would you like to receive an update on the progress of the donee?</label>
                                            <select name="update"
                                                required
                                                className="donor-text-input"
                                                id="update" {...register('updateRequest', { required: true })}>
                                                <option value="Yes">Yes</option>
                                                <option value="No"> No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="schedule-section">
                                        <h4>Schedule</h4>
                                        <div className="form-flex">
                                            <input
                                                type="checkbox"
                                                name="sendViaOnsite"
                                                id="sendViaOnsite"
                                                className="schedule-check"
                                                required
                                                {...register('sendViaOnsite', { required: true })}
                                            />
                                            <p className="schedule-para">Send Via Onsite</p>
                                            <h3>-OR-</h3>
                                            <input
                                                type="checkbox"
                                                name="requestforpickup"
                                                id="requestforpickup" className="schedule-check"
                                                {...register('sendViaOnsite', { required: true })}
                                            />
                                            <p className="schedule-para">Request for pickup</p>
                                        </div>
                                    </div>

                                    <div className="t-c-para">
                                        <h5>Please acknowledge the following terms and conditions required for participation in this program.</h5>
                                    </div>

                                    <div className="form-flex">
                                        <input
                                            type="checkbox"
                                            name="agreement"
                                            id="agreement"
                                            className="schedule-check"
                                            required
                                            {...register('agreement', { required: true })}
                                        />
                                        <p className="schedule-para">I agree that by donating a device, I agree to be bound by TechPow’s <Link to="/TermsOfUse" className="blue-text no-decoration">Terms of Use</Link> and <Link to="/PrivacyPolicy" className="blue-text no-decoration">Privacy Policy</Link></p>
                                    </div>

                                    <div className="signature">
                                        <p>Please type your full legal name here as your signature agreeing to all previous statements in this form</p>
                                        <input
                                            type="text"
                                            name="signature"
                                            id="signature"
                                            className="donor-text-input signature-box-donor"
                                            required
                                            {...register('signature', { required: true })}
                                        />
                                    </div>

                                    <div className="form-login-btn next-btn">
                                        <button type="submit" className="btn btn-primary" onClick={() => setShow(true)}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onClose={() => setShow(false)}>
                    <ThankyouCardDonor />
                </Modal>
            </DefaultLayout>
        </React.Fragment>
    );
}

export default DonorApplication;