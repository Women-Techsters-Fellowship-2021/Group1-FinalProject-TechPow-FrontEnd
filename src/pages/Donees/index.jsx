import React from 'react';
import { AppContext } from '../../components/AppStateProvider';
import { useContext } from 'react';
import DoneeCard from '../../components/Donee-card';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import Searchbox from '../../components/Searchbox';

//import styles
import './style.css';

function Donees() {
    const { state } = useContext(AppContext);

    return (
        <DefaultLayout>
            <div className="container">
                <div className="welcome-div">
                    <div className="flex-welcome">
                        <h1 className="welcome-text">
                            <span className="green appname">Welcome To T</span><span className="appname">ech</span><span className="green appname">P</span><span className="appname">ow</span>
                        </h1>
                        <div className="avatar">T</div>
                    </div>
                    <p className="welcome-para"><strong>Available Digital Device Request</strong></p>
                </div>
                <div className="search">
                    <Searchbox />
                </div>
                <div className="feature-text">
                    <h2 className="gold-text center-text">Featured Donees</h2>
                    <p>
                        Our team regularly evaluates rigorous, evidence-based studies in all our key sectors, and we've identified these donations as having the highest potential for impact on donees' outcome.
                    </p>
                </div>
                <div className="donee-list">
                    {state.donees.map(donee => {
                        return <DoneeCard donee={donee} key={donee.id} />
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Donees;