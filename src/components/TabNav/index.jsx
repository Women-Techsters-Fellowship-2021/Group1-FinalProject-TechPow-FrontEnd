import React from 'react';
import Tabpane from "./Tabpane";
import "./style.css";

//import { TabPane } from 'react-bootstrap';

function TabNav() {
    return (
        <div>
            <h2>Application Form</h2>
            <Tabpane>

                <div label="Personal Information">
                    <h4>Personal Information Form Here...</h4>
                </div>
                <div label="Donation Request">
                    <h4>Donation Request Form Here...</h4>
                </div>
                <div label="Verification">
                    <h4>Verification Form Here...</h4>
                </div>
            </Tabpane>
        </div>
    );
}

export default TabNav;