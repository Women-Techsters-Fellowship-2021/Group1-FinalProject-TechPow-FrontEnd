import { Link } from 'react-router-dom';

function DoneeCard({ donee }) {
    return (
        <Link>
            <div className="donee-card">
            <span className="item-needed">{donee.itemNeeded}</span>
            <div>
                <img src={donee.imageLink} alt="donee" />
                <div className="donee-info">
                    <h1 className="donee-fullname">{donee.fullName}</h1>
                    <p className="grey-text">Description</p>
                    <p className="reason">{donee.reasonForApplication}... <span className="green">Read more</span></p>
                    <div className="item-location">
                        <div>
                            {/* <img src={donation} alt="" /> */}
                            <p className="item">{donee.itemNeeded}</p>
                        </div>
                        <div>
                            {/* <img src={location} alt="" /> */}
                            <p className="location">{donee.country}</p>
                        </div>
                    </div>
                    <div className="butns">
                        <button className="btn-primary">Donate</button>
                        <p>Share <span><img src="share-icon" alt="" /></span></p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
}

export default DoneeCard;