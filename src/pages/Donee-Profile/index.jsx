import React from 'react';
import { Link } from 'react-router-dom';

function DoneeProfile() {
    return (
        <div className="donee-profile">
            <Link to="/DonorApplicationForm">
                <button className="btn-primary">Donate Now</button>
            </Link>
        </div>
    );
}

export default DoneeProfile;