import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../components/AppStateProvider';


function Request() {
    const { register, handleSubmit } = useForm();
    const { state: { setActiveTab, completedTabs }, dispatch } = useContext(AppContext);
    
    const updateApplicationForm = (data) => {
        dispatch({ type: 'UPDATE_APPLICATION_FORM', payload: data })

        setActiveTab("Verification");
    }

    useEffect(() => {
        if (!completedTabs.includes("Donation Request"))
            dispatch({ type: 'ADD_COMPLETED_STEP', payload: "Donation Request" })
    })

    return (
        <div className="donee-app-form">
            <form className=" donee-form" onSubmit={handleSubmit(updateApplicationForm)}>
                <div className="form-flex">
                    <div className="form-input-field">
                        <label for="ItemNeeded">What do you need?</label>
                        <select name="ItemNeeded" className="donee-text-input" id="ItemNeeded" {...register('itemNeeded', { required: true })}>
                            <option value="Phone"> Phone</option>
                            <option value="Laptop"> Laptop</option>
                            <option value="Internet Data"> Internet Data</option>
                        </select>
                        <span className="notify"><strong>Please Note: </strong>Internet Data is currently unavailable
                        </span>
                    </div>
                    <div className="form-input-field">
                        <label>What organisation is running the program?</label>
                        <input 
                            type="text"
                            className="donee-text-input"
                            required
                            {...register('orgName', { required: true })}
                        />
                        <span className="notify"><strong>Please Note: </strong>Organization could be a tertiary institution, online course provider, or other institutions.
                        </span>
                    </div>
                </div>

                <div className="form-flex">
                    <div className="form-input-field">
                        <label>Provide organisation address</label>
                        <input type="text" className="donee-text-input"
                            required
                            {...register('orgWebsite', { required: true })}
                        />
                        <span className="notify"><strong>Please Note: </strong>If the program is taking place online, you can enter the organization's website address.
                        </span>
                    </div>
                    <div className="form-input-field">
                        <label>Provide organisation's contact details</label>
                        <input type="text" className="donee-text-input"
                            required
                            {...register('orgContact', { required: true })}
                        />
                        <span className="notify"><strong>Please Note: </strong>The contact details could be an email address or a phone number.
                        </span>
                    </div>
                </div>

                <div>
                    <div className="form-input app-textarea">
                        <label>Give a brief need on why you need the item</label><br />
                        <span className="notify">Please include a detailed response  between 150-3000 words. Tell your story!
                        </span>
                        <textarea name="ReasonforNeed" id="ReasonforNeed"
                            required className="donee-text-input donee-textarea"
                            cols="60" rows="6" {...register('reasonForApplication', { required: true })} ></textarea>
                    </div>
                </div>
                <div className="form-login-btn next-btn">
                    <button type="submit" className="btn btn-primary">Next</button>
                </div>
            </form>
        </div>
    );
}

export default Request;