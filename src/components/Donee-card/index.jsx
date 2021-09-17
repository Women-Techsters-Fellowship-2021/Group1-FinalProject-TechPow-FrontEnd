import { Link } from 'react-router-dom';

//import styles
import './style.css';

//import icons
import donation from '../../resources/icons/Need.svg';
import location from '../../resources/icons/Location.svg';
import shareicon from '../../resources/icons/share-fill.svg';

function DoneeCard({ donee }) {
    return (
        <Link to="/DoneeProfile" className="Link-Donee">
            <div className="donee-card">
                <span className="item-needed">{donee.itemNeeded}</span>
                <div>
                    <img src={donee.imageLink} alt="donee" className="img-donee" />
                    <div className="donee-info">
                        <h2 className="donee-fullname">{donee.fullName}</h2>
                        <p className="grey-text desc">Description</p>
                        <p className="reason">{donee.reasonForApplication}... <span className="green"><strong className="r">Read more</strong></span></p>
                        <div className="item-location">
                            <div>
                                <img src={donation} alt="" className="small-icon" />
                                <p className="item">{donee.itemNeeded}</p>
                            </div>
                            <div>
                                <img src={location} alt="" className="small-icon" />
                                <p className="location">{donee.country}</p>
                            </div>
                        </div>
                        <div className="butns">
                            <Link to="/DonorApplicationForm"><button className="btn-primary">Donate</button></Link>
                            <div className="shareIcon">
                                <p className="share-text">Share</p>
                                <img src={shareicon} alt="" className="extra-small-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default DoneeCard;