import React from 'react';
import './style.css';

function Sidebar() {
    return (
        <div>
            <div className="sidebar-title">
                <h3>Application Form</h3>
            </div>

            <div className="sidebar-menu form-container sidebar-container">
                <ul>
                    <li className="menu">Personal Information</li>
                    <li className="menu">Donation</li>
                    <li className="menu">Verification</li>
                </ul>

            </div>
        </div>



    );
}

export default Sidebar;