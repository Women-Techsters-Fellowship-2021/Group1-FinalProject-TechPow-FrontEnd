import React from 'react';
import Tabpane from "./Tabpane";
import "./style.css";
import PersonalInfo from '../../pages/DoneeApplicationForm/PersonalInfo';
import Verification from '../../pages/DoneeApplicationForm/Verification';
import Request from '../../pages/DoneeApplicationForm/Request';

//import { TabPane } from 'react-bootstrap';

function TabNav() {
    return (
        <div>
            <h2>Application Form</h2>
            <Tabpane>

                <div label="Personal Information">
                    <PersonalInfo />
                </div>
                <div label="Donation Request">
                    <Request />
                </div>
                <div label="Verification">
                    <Verification />
                </div>
            </Tabpane>
        </div>
    );
}

export default TabNav;