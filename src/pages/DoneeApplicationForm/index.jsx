import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../components/AppStateProvider';
import { toast } from 'react-toastify';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import TabNav from '../../components/TabNav';


import './style.css';

function DoneeApplicationForm() {
    const { state: { isLoggedIn } } = useContext(AppContext);
    const usehistory = useHistory();
    if (!isLoggedIn) {
        usehistory.push('/Login');
        return toast.error("Please Login to get started...",
            {
                position: toast.POSITION.TOP_CENTER
            });
    }

    return (
        <DefaultLayout>
            <div className="container bg-pattern donee-app-form-page">
                <div className="container">
                    <div className="application-page-header">
                        <h1 className="center-head">
                            <span className="green appname">Welcome To T</span><span className="appname">ech</span><span className="green appname">P</span><span className="appname">ow</span>
                        </h1>
                        <p>Please tell us about yourself and why you need a device</p>
                        <p>We aim to ensure that everyone has access to technical devices.</p>
                    </div>
                    <div className="back-link">
                        <a href="/LandingPage"> &lt; Back to home</a>
                    </div>
                    <TabNav />
                </div>
            </div>
        </DefaultLayout>
    );
}
export default DoneeApplicationForm;