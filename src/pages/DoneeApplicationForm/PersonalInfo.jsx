import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../components/AppStateProvider';

function PersonalInfo() {
    const { register, handleSubmit } = useForm();
    const { state: { setActiveTab, completedTabs }, dispatch } = useContext(AppContext);

    const updateApplicationForm = (data) => {
        dispatch({ type: 'UPDATE_APPLICATION_FORM', payload: data })

        setActiveTab("Donation Request");
    }

    useEffect(() => {
        if (!completedTabs.includes("Personal Information"))
            dispatch({ type: 'ADD_COMPLETED_STEP', payload: "Personal Information" })
    })

    return (
        <div className="donee-app-form">
            <form className="donee-form" onSubmit={handleSubmit(updateApplicationForm)}>
                <div className="form-flex">
                    <div className="form-input-field">
                        <label>First Name</label><br />
                        <input
                            type="text"
                            name="firstname"
                            className="donee-text-input"
                            required
                            id="firstname" {...register('firstName', { required: true })} 
                        />                                             
                        <span className="notify">Please enter a legal name here. We will ask for your preferred name later.</span>
                    </div>
                    <div className="form-input-field">
                        <label>Last Name</label><br />
                        <input
                            type="text"
                            name="lastname"
                            className="donee-text-input"
                            required
                            id="lastname" {...register('lastName', { required: true })} 
                        />     
                        <span className="notify">Please enter your surname here.</span>
                    </div>
                </div>

                <div className="form-flex">
                    <div className="form-input-field">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phonenumber"
                            id="phonenumber"
                            className="donee-text-input"
                            required
                            placeholder="+234xxxxxxxxxx"
                            {...register('phoneNumber', { required: true })}
                        />
                        <span className="notify">Please enter your phone number with your country code in the above format.</span>
                    </div>
                    <div className="form-input-field">
                        <label>Date of Birth</label><br />
                        <input
                            type="text"
                            name="dob"
                            className="donee-text-input"
                            required
                            id="dob" placeholder="MM/DD/YYYY" {...register('dob', { required: true })}
                        />
                        <span className="notify"><strong>Please Note: </strong> This opportunity is only available to applicants of 18 years of age and above.</span>
                    </div>
                </div>

                <div className="form-flex">
                    <div className="form-input-field">
                        <label for="Gender">Gender</label>
                        <select name="Gender" id="gender"
                            required className="donee-text-input"
                            {...register('gender', { required: true })}>
                            <option value="Female"> Female</option>
                            <option value="Male"> Male</option>
                        </select>
                    </div>
                    <div className="form-input-field">
                        <label>What is your home address?</label><br />
                        <input
                            type="text"
                            name="address"
                            id="address"
                            className="donee-text-input"
                            required
                            {...register('homeAddress', { required: true })}
                        />
                    </div>
                </div>

                <div className="form-flex">
                    <div className="form-input-field">
                        <label for="Country">Country</label>
                        <select name="Country" id="country" className="donee-text-input" required {...register('country', { required: true })}>
                            <option value="Egypt"> Egypt</option>
                            <option value="Ghana"> Ghana</option>
                            <option value="Kenya"> Kenya</option>
                            <option value="Nigeria"> Nigeria</option>
                            <option value="SouthAfrica"> SouthAfrica</option>

                        </select>
                    </div>
                    <div className="form-input-field" >
                        <label for="Education">Education level</label><br />
                        <select name="Education" id="education" className="donee-text-input" required {...register('eduLevel', { required: true })}>
                            <option value="Senior Secondary School"> Senior Secondary School</option>
                            <option value="University"> University</option>
                            <option value="Masters"> Masters</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div className="next-btn">
                        <button type="submit" className="btn btn-primary">Next</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default PersonalInfo;