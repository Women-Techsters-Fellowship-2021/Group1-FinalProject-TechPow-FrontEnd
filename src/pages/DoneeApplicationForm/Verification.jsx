import React from 'react';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../components/AppStateProvider';
import { toast } from 'react-toastify';
//import ThankyouCard from '../../components/Thankyou-cardDonee';

//import icon
//import Vector from '../../resources/icons/Vector.svg';

function Verification() {
    const { register, handleSubmit } = useForm();
    const usehistory = useHistory();
    let imageselectPass = "";
    let imageselectLetter = "";
    let imageselectID = "";

    const { state: { userEmail, userFirstName, applicationForm, userId, completedTabs, imageSelectedID, imageSelectedLetter, imageSelectedPass, Token }, dispatch } = useContext(AppContext);

    const ImageSelectorHandler = (e) => {
        imageselectPass = e.target.files[0];
        //console.log(imageselect);
        dispatch({
            type: 'SELECT_IMAGE',
            payload: {
                imageSelectedPass: imageselectPass
            },
        });
    }
    const LetterSelectorHandler = (e) => {
        imageselectLetter = e.target.files[0];
        //console.log(imageselect);
        dispatch({
            type: 'SELECT_LETTER',
            payload: {
                imageSelectedLetter: imageselectLetter
            },
        });
    }
    const IDSelectorHandler = (e) => {
        imageselectID = e.target.files[0];
        //console.log(imageselect);
        dispatch({
            type: 'SELECT_ID',
            payload: {
                imageSelectedID: imageselectID
            },
        });
    }


    // Handler for uploading selected image
    const ImageUploadHandler = async () => {

        const formDataImage = new FormData();
        const formDataLetter = new FormData();
        const formDataID = new FormData();

        formDataImage.append("file", imageSelectedPass);
        formDataImage.append("upload_preset", "techpow_donee_images");

        formDataLetter.append("file", imageSelectedLetter);
        formDataLetter.append("upload_preset", "techpow_donee_letters");

        formDataID.append("file", imageSelectedID);
        formDataID.append("upload_preset", "techpow_donee_nationalid");


        // saving image on cloudinary space into the techpow_uploads folder
        const responseImage = await Axios.post(
            "https://api.cloudinary.com/v1_1/ddg54qg6i/image/upload", formDataImage)
        console.log(responseImage);
        if (responseImage.status === 200) {
            console.log(responseImage.data.url);
            return responseImage.data.url;
        }

        const responseLetter = await Axios.post(
            "https://api.cloudinary.com/v1_1/ddg54qg6i/image/upload", formDataLetter)
        console.log(responseLetter);
        if (responseLetter.status === 200) {
            console.log(responseLetter.data.url);
            return responseLetter.data.url;
        }

        const responseID = await Axios.post(
            "https://api.cloudinary.com/v1_1/ddg54qg6i/image/upload", formDataID)
        console.log(responseID);
        if (responseID.status === 200) {
            console.log(responseID.data.url)
            return responseID.data.url;
        }
    };


    const updateApplicationForm = (data) => {
        dispatch({ type: 'UPDATE_APPLICATION_FORM', payload: data })

        //Prep for submitting data to the backend
        ImageUploadHandler().then((imageUrl, letterUrl, IDUrl) => {

            const newDoneeApplication = {
                dob: applicationForm.dob,
                userID: userId,
                fullName: applicationForm.fullName,
                homeAddress: applicationForm.homeAddress,
                country: applicationForm.country,
                itemNeeded: applicationForm.itemNeeded,
                reasonForApplication: applicationForm.reasonForApplication,
                imageLink: imageUrl,
                letterOfRecommendationLink: letterUrl,
                nationalIdLink: IDUrl,
                orgName: applicationForm.orgName,
                orgContact: applicationForm.orgContact,
                orgWebsite: applicationForm.orgWebsite,
                signature: applicationForm.signature,
                phoneNumber: applicationForm.phoneNumber,
                gender: applicationForm.gender,
                eduLevel: applicationForm.eduLevel
            };
            const token = Token;
            //Call webAPI
            Axios.post('https://localhost:44326/api/v1/DoneeApp',
                newDoneeApplication,
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
                            type: 'DONEE_APPLICATION',
                            payload: {
                                donee: newDoneeApplication,
                            },
                        })
                        usehistory.push('/Thankyou-cardDonee');
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
        });
        const newEmail = {
            toEmail: userEmail,
            subject: "TechPow Application Notification",
            body: "Dear " + userFirstName + ". Thank you for completing your application. Our Team will review your application and will let you know about the result within approximately 20 days"
        }
        //Calling api for email
        Axios.post('https://localhost:44326/api/v1/Email/SendEmail',
            newEmail)
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    toast.success("Application Confirmation mail sent!");
                }
                return false;
            }
            );

    }

    // Handler for Image selection  for upload



    useEffect(() => {
        if (!completedTabs.includes("Verification"))
            dispatch({ type: 'ADD_COMPLETED_STEP', payload: "Verification" })
    })

    return (
        <div className="donee-app-form">
            <form className="donee-form" onSubmit={handleSubmit(updateApplicationForm)}>
                <div>
                    <div className="upload-section form-flex">
                        <div className="upload-btn-group">
                            <label for="file" className="upload-btn">Passport</label>
                            <div className="upload-field">
                                <input
                                    type="file"
                                    id="file"
                                    className="file"
                                    accept="image/*" {...register('imageLink', { required: true })}
                                    onChange={ImageSelectorHandler}
                                />
                                {/* <img src={Vector} alt="" className="upload-icon" />  */}
                                <p className="upload-text">Upload your passport Photograph</p>
                            </div>
                        </div>

                        <div className="upload-btn-group">
                            <label>Letter of Recommendation</label>
                            <div className="upload-field">
                                <input
                                    type="file"
                                    id="file"
                                    accept="image/*" {...register('letterOfRecommendationLink', { required: true })}
                                    onChange={LetterSelectorHandler}
                                />
                                {/* <img src={Vector} alt="" className="upload-icon" />  */}
                                <p className="upload-text">Upload letter of recommendation</p>
                            </div>
                        </div>

                        <div className="upload-btn-group">
                            <label> National Identity Card</label>
                            <div className="upload-field id-file">
                                <input
                                    type="file"
                                    id="file"
                                    className="file"
                                    accept="image/*" {...register('nationalIdLink', { required: true })}
                                    onChange={IDSelectorHandler}
                                />
                                {/* <img src={Vector} alt="" className="upload-icon" /> */}
                                <p className="upload-text">Upload a copy of your National identity car</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="acknowledgement-text">
                            <h4>
                                Please acknowledge the following terms and conditions required for participation in this program.
                            </h4>
                        </div>
                        <div className="agreement-div">
                            <div>
                                <input type="checkbox"
                                    name="terms"
                                    id="terms"
                                    required
                                    {...register('terms', { required: true })}
                                />
                            </div>
                            <div>
                                <p className="blue-text">
                                    By clickling this box, I agree to the following:
                                </p>
                                <p className="blue-text">
                                    I understand that applicant must be at least 18 years and I confirm that I am 18 years old or above; <br />I understand that if I receive the device, I must use it to acquire digital skills;<br />I agree that I will share my training progress with TechPow and Donor once a month till the completion of the training.
                                </p>
                            </div>
                        </div>
                        <div className="agreement-div">
                            <input type="checkbox"
                                name="agreement"
                                id="agreement"
                                required
                                {...register('agreement', { required: true })}
                            />
                            <p className="blue-text">I also agree that by requesting for a device, I agree to be bound by TechPow’s Terms of Use and Privacy Policy</p>
                        </div>
                        <div className="signature">
                            <label for="Signature">
                                Please type your full legal name here as your signature agreeing to all previous statements in this form.
                            </label>
                            <input
                                type="text"
                                className="donee-text-input signature-box"
                                required
                                {...register('signature', { required: true })}
                            />
                        </div>
                    </div>
                    <div className="form-login-btn next-btn submit-app-btn">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Verification;