import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
// import { AppContext, useContext } from '../../components/AppStateProvider';
// import { toast } from 'react-toastify';
// import axios from 'axios';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import TabNav from '../../components/TabNav';
// import Sidebar from '../../components/Sidebar';

import './style.css';

function DoneeApplicationForm() {
    //     const { register, handleSubmit } = useForm();
    //     const history = useHistory();
    //     const context = useContext(AppContext);

    //     //function to apply as a donee
    //     const applyAsDonee = ({fullname, dob, userId, homeAddress, country, eduLevel, gender, itemNeeded, reasonForApplication, imageLink, letterOfRecomendationLink, nationalIdLink, orgName, orgWebsite, orgContact, signature}) =>
    //     {
    //         //create a new donee object and post to the API endpoint
    //         const newDonee = {
    //             fullname : fullname,
    //             dob : dob,
    //             userId : context.state.userId,
    //             homeAddress : homeAddress,
    //             country : country,
    //             eduLevel : eduLevel,
    //             gender : gender,
    //             itemNeeded : itemNeeded,
    //             reasonForApplication : reasonForApplication,
    //             imageLink : imageLink,
    //             letterOfRecomendationLink : letterOfRecomendationLink,
    //             nationalIdLink: nationalIdLink,
    //             orgName : orgName,
    //             orgWebsite : orgWebsite,
    //             orgContact : orgContact,
    //             signature : signature
    //         };

    //         axios.post('https://localhost:44326/api/v1/DoneeApp/AddApplication',
    //             newDonee)
    //             .then(result => {
    //                 console.log(result);
    //                 if (result.data.success) {
    //                     toast.success(result.data.message);
    //                     context.dispatch({
    //                         type: 'DONEE_APPLICATION',
    //                         payload: {
    //                             donee : newDonee,
    //                         },
    //                     })
    //                     history.push('/Home');
    //                     return true;
    //                 }
    //                 for (let index = 0; index < result.data.errors.length; index++) {
    //                     toast.error(result.data.errors[index]);
    //                 }
    //             })
    //             .catch(error => {
    //                 console.log(error.response.data.errors);
    //                 for (let index = 0; index < error.response.data.errors.length; index++) {
    //                     toast.error(error.response.data.errors[index]);
    //                 }
    //             })
    //     }

    return (
        <DefaultLayout>
            <div className="application-page-header">
                <h2>
                    <span className="green appname">Welcome To T</span><span className="appname">ech</span><span className="green appname">P</span><span className="appname">ow</span>
                </h2>
                <p>Please tell us about yourself and why you need a device</p>
                <p>We aim to ensure that everyone has access to technical devices.</p>
            </div>

            <div>
                <a href="/LandingPage"> &lt; Back to home</a>
            </div>
            <TabNav />
        </DefaultLayout>
    );
}
export default DoneeApplicationForm;