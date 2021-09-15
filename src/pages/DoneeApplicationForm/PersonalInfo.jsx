import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../components/AppStateProvider';

function PersonalInfo() {
    const { register, handleSubmit } = useForm();
    const { state: { setActiveTab, completedTabs }, dispatch } = useContext(AppContext);

    const updateApplicationForm = (data) => {
        dispatch({ type: 'UPDATE_APPLICATION_FORM', payload: data })

        setActiveTab("Donation Request")
    }

    useEffect(() => {
        if (!completedTabs.includes("Personal Information"))
            dispatch({ type: 'ADD_COMPLETED_STEP', payload: "Personal Information" })
    })

    return (

        <div className="donee-app-form">
            {/* <div>
                    <TabNav />
                </div> */}

            <form className=" donee-form" onSubmit={handleSubmit(updateApplicationForm)}>
                <div>
                    <div className="form-input">
                        <label>Full Name</label>
                        <input type="text" name="fullname" id="fullname" {...register('fullName', { required: true })} />
                        <span className="notify">Please enter a legal name here. We will ask or your preferred name later.</span>
                    </div>
                    <div className="form-input">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder="+234xxxxxxxxxx"
                            {...register('phoneNumber', { required: true })}
                        />
                    </div>
                </div>

                <div>
                    <div className="form-input">
                        <label>Date of Birth</label>
                        <input type="text" name="dob" id="dob" placeholder="MM/DD/YYYY" {...register('dob', { required: true })} />
                        <span className="notify">Please Note: To make a donation request, you must be 18 years or above.</span>
                    </div>
                    <div className="form-input">
                        <label for="Gender">Gender</label>
                        <select name="Gender" id="gender" {...register('gender', { required: true })}>
                            <option value="Female"> Female</option>
                            <option value="Male"> Male</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div className="form-input">
                        <label>What is your home address?</label>
                        <input type="text" name="address" id="address"  {...register('homeAddress', { required: true })} />
                        <span className="notify">Please Note: To make a donation request, you must be 18 years or above.</span>
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
                </div>

                <div>
                    <div className="form-input" >
                        <label for="Education">Education level</label>
                        <select name="Education" id="education" {...register('eduLevel', { required: true })}>
                            <option value="Senior Secondary School"> Senior Secondary School</option>
                            <option value="University"> University</option>
                            <option value="Masters"> Masters</option>

                        </select>
                    </div>
                </div>

                <div>
                    <div className="form-login-btn form-input">
                        <button type="submit" className="btn btn-primary">Next</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default PersonalInfo;