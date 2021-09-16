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
        <form className=" donee-form" onSubmit={handleSubmit(updateApplicationForm)}>
            <div>
                <div className="form-input">
                    <label for="ItemNeeded">What do you need?</label>
                    <select name="ItemNeeded" id="ItemNeeded" {...register('itemNeeded', { required: true })}>
                        <option value="Phone"> Phone</option>
                        <option value="Laptop"> Laptop</option>
                        <option value="Internet Data"> Internet Data</option>
                    </select>
                </div>
                <div className="form-input">
                    <label>What organisation is running the program?</label>
                    <input type="text"
                        required
                        {...register('orgName', { required: true })}
                    />
                </div>
            </div>

            <div>
                <div className="form-input">
                    <label>Provide organisation address</label>
                    <input type="text"
                        required
                        {...register('orgWebsite', { required: true })}
                    />
                </div>
                <div className="form-input">
                    <label>Provide organisation's contact details</label>
                    <input type="text"
                        required
                        {...register('orgContact', { required: true })}
                    />
                </div>
            </div>

            <div>
                <div className="form-input">
                    <label>Give a brief need why you need the item</label>
                    <textarea name="ReasonforNeed" id="ReasonforNeed"
                        required
                        cols="30" rows="10" {...register('reasonForApplication', { required: true })} ></textarea>
                </div>
            </div>

            <div className="form-login-btn">
                <button type="submit" className="btn btn-primary">Next</button>
            </div>
        </form>
    );
}

export default Request;