import { useParams, Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { AppContext } from '../../components/AppStateProvider';
import DefaultLayout from '../../components/Layout/DefaultLayout';

//import icons
import donation from '../../resources/icons/Need.svg';
import location from '../../resources/icons/Location.svg';
import shareicon from '../../resources/icons/share-fill.svg';

//import styles
import './style.css';


function ReadMore({ key }) {
    const { state: { donees } } = useContext(AppContext);

    //using params to get the value of a dynamic route parameter
    const params = useParams();
    const currentDonee = useRef(
        donees.find(donee => donee.userId === params.doneeid),
    );

    return (
        <DefaultLayout>
            <div className="container">
                <div className="display-profile">
                    <div className="fullname">
                        <h1>{currentDonee.current.firstName}{' '}{currentDonee.current.lastName}</h1>
                    </div>
                    <div className="item-location">
                        <div>
                            <img src={donation} alt="" className="small-icon" />
                            <p className="item">{currentDonee.current.itemNeeded}</p>
                        </div>
                        <div>
                            <img src={location} alt="" className="small-icon" />
                            <p className="location">{currentDonee.current.country}</p>
                        </div>
                    </div>
                    <div className="flex-display">
                        <div className="display-image"><img src={currentDonee.current.imageLink} alt={currentDonee.current.firstName} /></div>
                        <div className="white-card form-container">
                            <p>Help donate this request</p>
                            <div className="small-flex-btns">
                                <Link to="/DonorApplicationForm">
                                    <button className="btn-primary">
                                        Donate
                                    </button>
                                </Link>
                                <div className="shareIcon">
                                    <p className="share-text">Share</p>
                                    <img src={shareicon} alt="" className="extra-small-icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="story-div">
                        <h1 className="donee-name-story">{currentDonee.current.firstName}'s story</h1>
                    </div>
                    <p>{currentDonee.current.reasonForApplication}</p>
                    {/* <p>{currentDonee.current.fullName}, age 25, is single and has one daughter. She lives at her parent's house.</p>
                    <p>
                        She is a hardworking woman who seeks a way to get ahead through her efforts. And so to give the best to her family, she has a shop in her house where she sells provisions. Last year December, she was introduced to tech by a friend. She used her friend's laptop to learn html and that spurred her interest in Software development. Early this year,her friend moved to abuja and she started using her phone to continue her learning on youtube. she developed a one page website using an android IDE app. she came across freecode camp and fell in love with the curriculum but she doesn't have a laptop.
                    </p>
                    <p>
                    {currentDonee.current.fullName} needs a laptop to complete her training software development at freecode camp. she dreams of improving the conditions in her home.
                    </p> */}
                </div>
            </div>
        </DefaultLayout>
    );
}

export default ReadMore;