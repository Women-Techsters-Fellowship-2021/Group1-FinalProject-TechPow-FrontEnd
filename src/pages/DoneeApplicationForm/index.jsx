// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
// import { AppContext, useContext } from '../../components/AppStateProvider';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import DefaultLayout from '../../components/Layout/DefaultLayout';
// import Sidebar from '../../components/Sidebar';

// import './style.css';

// function DoneeApplication() {
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

//     return (
//         <DefaultLayout>
//             <div className="bg-pattern">
            
                
                
//             </div>
//         </DefaultLayout>
//     );
// }

// export default DoneeApplication;