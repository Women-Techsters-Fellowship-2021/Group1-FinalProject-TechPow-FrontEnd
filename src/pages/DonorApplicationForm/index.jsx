import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { useContext } from 'react';
//import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../components/AppStateProvider';
import Axios from 'axios';
import { toast } from 'react-toastify';
import './style.css';

function DonorApplication() {
    const { register, handleSubmit } = useForm();
    const { state: { Token, userId }, dispatch } = useContext(AppContext);
    //const usehistory = useHistory();

    // if (!isLoggedIn) {
    //     usehistory.push('/Login');
    //     return toast.error("Please Login to Donate....",
    //         {
    //             position: toast.POSITION.TOP_CENTER
    //         });
    // }

    const SubmitDonation = (data) => {
        let newDonation = {
            userID: userId,
            fullName: data.fullName,
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

            });
    }

    return (
        <DefaultLayout>
            <div>
                <h2>
                    <span className="green appname">Welcome To T</span><span className="appname">ech</span><span className="green appname">P</span><span className="appname">ow</span>
                </h2>
            </div>

            <div>
                <a href="/LandingPage"> &lt; Back to home</a>
            </div>
            <div>
                <h4>Application Form</h4>
            </div>
            <div className="div-split">
                <div className="donee-form donation-menu">
                    <span className="donation-info">Donation Information</span>
                </div>
                <div className="donation-form">

                    < div className="form-split donee-form">
                        <form onSubmit={handleSubmit(SubmitDonation)}>
                            <div className="div-split">
                                {/* //First column */}
                                <div className="form-split">
                                    <div className="form-input">
                                        <label>Full Name</label>
                                        <input type="text" name="fullname"
                                            required
                                            id="fullname" {...register('fullName', { required: true })} />
                                        <span className="notify">Please enter a legal name here.We will ask or your preferred name later.</span>
                                    </div>
                                    <div className="form-input">
                                        <label>What is your home address?</label>
                                        <input type="text" name="address"
                                            required
                                            id="address" {...register('homeAddress', { required: true })} />
                                    </div>
                                    <div className="form-input">
                                        <label>Reason for giving out the item</label>
                                        <input type="text" name="donationreason"
                                            required
                                            id="donationreason" {...register('reasonForDonation', { required: true })} />
                                    </div>
                                    <div className="form-input" >
                                        <label for="Ownership">Ayou the owner of the device?</label>
                                        <select name="ownership"
                                            required
                                            id="ownership" {...register('itemOwnership', { required: true })}>
                                            <option value="Yes">Yes</option>
                                            <option value="No"> No</option>
                                        </select>
                                    </div>
                                    <div className="form-input" >
                                        <label for="update">Receieve Update</label>
                                        <select name="update"
                                            required
                                            id="update" {...register('updateRequest', { required: true })}>
                                            <option value="Yes">Yes</option>
                                            <option value="No"> No</option>
                                        </select>
                                    </div>
                                </div>

                                {/* //second column */}
                                <div className="form-split">
                                    <div className="form-input">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phonenumber"
                                            id="phonenumber"
                                            required
                                            placeholder="+234xxxxxxxxxx"
                                            {...register('phoneNumber', { required: true })}
                                        />
                                    </div>
                                    <div className="form-input">
                                        <label for="Country">Country</label>
                                        <select name="Country" id="country" {...register('country', { required: true })}>
                                            <option value="Egypt"> Egypt</option>
                                            <option value="Ghana"> Ghana</option>
                                            <option value="Kenya"> Kenya</option>
                                            <option value="Nigeria"> Nigeria</option>
                                            <option value="SouthAfrica"> SouthAfrica</option>
                                        </select>
                                    </div>
                                    <div className="form-input">
                                        <label for="update">Device Specification</label>
                                        <input type="text" name="devicespec"
                                            required
                                            id="devicespec" {...register('deviceSpecification', { required: true })} />
                                    </div>
                                    <div className="form-input">
                                        <label for="Country">Device Condition</label>
                                        <select name="devicecondition" id="devicecondition" {...register('deviceCondition', { required: true })}>
                                            <option value="New">New-Sealed in the Box</option>
                                            <option value="UsedW"> Used-Working</option>
                                            <option value="UsedN/W"> Used-Not Working</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <h4>Schedule</h4>
                                </div>
                                <div>
                                    <div className="">
                                        <input type="checkbox" name="sendViaOnsite" id="sendViaOnsite"
                                            required
                                            {...register('sendViaOnsite', { required: true })} />
                                        <p>Send Via Onsite</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>Please acknowledge the following terms and conditions required for participation in this program.
                                    </h5>
                                </div>
                                <div className="">
                                    <input type="checkbox" name="agreement" id="agreement"
                                        required
                                        {...register('agreement', { required: true })} />
                                    <p>I agree that by donating a device, I agree to be bound by TechPow’s Terms of Use and Privacy Policy</p>
                                </div>
                                <div>
                                    <p>Please type your full legal name here as your signature agreeing to all previous statements in this form</p>
                                    <input type="text" name="signature" id="signature"
                                        required
                                        {...register('signature', { required: true })} />
                                </div>
                            </div>
                            <div>
                                <div className="form-login-btn">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout >
    );
}

export default DonorApplication;