import React from 'react';
import { AppContext } from '../../components/AppStateProvider';
import { useContext } from 'react';
import DoneeCard from '../../components/Donee-card';
import DefaultLayout from '../../components/Layout/DefaultLayout';

function Donees() {
    const { state } = useContext(AppContext);

    return (
        <DefaultLayout>
            <div className="heading-text">
                <h1 className="gold-text">Featured Donees</h1>
                <p className="blue-text">
                    Our team regularly evaluates rigorous, evidence-based impact studies in all our key sectors, and we've identified these donations as having the highest potential for imapact on donee's outcome.
                </p>
            </div>
            <div className="donee-list">
                {state.donees.map(donee => {
                    return <DoneeCard donee={donee} key={donee.id} />
                })}
            </div>
        </DefaultLayout>
    );
}

export default Donees;