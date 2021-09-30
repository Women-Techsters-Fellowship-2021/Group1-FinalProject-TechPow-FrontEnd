import React from 'react';
import { Link } from 'react-router-dom';

//import components
import DefaultLayout from '../../components/Layout/DefaultLayout';
import Signup from '../SignUp';

//import logos, images and icons
import people from '../../resources/images/landingthreePicsAndTriangles.png';
//import together from '../../resources/icons/Together....svg';
import ladypointing from '../../resources/images/girl_pointing.png';
import chart from '../../resources/icons/Core areas.svg';
import guy_pointing from '../../resources/images/guy_pointing.svg';
import people_map from '../../resources/images/Image1.png';
import donee1 from '../../resources/images/Donne1.png';
import donee2 from '../../resources/images/Donee2.png';
import donee3 from '../../resources/images/Donee3.png';
import person_icon from '../../resources/icons/Person.svg';
import donation_icon from '../../resources/icons/Donation.svg';
import update_icon from '../../resources/icons/Update.svg';
import location_icon from '../../resources/icons/Location.svg';
import microsoft from '../../resources/Logos/images (17).jpeg';
import techdev from '../../resources/Logos/TECH4DEV-LOGO-orientation-null.png';
import person_plus from '../../resources/icons/person-plus-fill.svg';
//import phone from '../../resources/icons/telephone.svg';
import donation from '../../resources/icons/Need.svg';
import shareicon from '../../resources/icons/share-fill.svg';


//import styles
import './style.css';


function LandingPage() {
    return (
        <DefaultLayout>
            <div className="landingPage">
                <section>
                    <div className="container">
                        <div className="split first-section">
                            <div>
                                <div className="self-aligned">
                                    <h2 className="banner-text home-banner-text">
                                        Enhancing and Promoting digital inclusion in Africa.
                                    </h2>
                                    <p className="banner-para">
                                        <span className="green appname">T</span><span className="appname">ech</span><span className="green appname">P</span><span className="appname">ow</span> is connecting <strong>people and organizations </strong> that need <strong>technical devices and internet data</strong> with <strong>people that are willing </strong>to donate in order to fulfil their dreams.
                                    </p>
                                    <Link to="/About">
                                        <button className=" btn-one btn-primary">Learn more</button>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <img src={people} alt="people giving and receiving donations" className="block-images banner-img" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-light">
                    <div className="container">
                        <h2 className="center-text">The stats are bleak</h2>
                        <div className="split">
                            <div>
                                <img src={ladypointing} alt="A lady in a yellow circle pointing" />
                            </div>
                            <div className="self-aligned-two">
                                <p className="stats">
                                    <span >Around <b className="red">90%</b> people</span> do not have access to a computer.
                                </p>
                                <p className="stats">
                                    <span>Approximately <b className="pink">80%</b></span> cannot afford internet data.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h2 className="center-text">Bridging Digital Divide</h2>
                        <div className="split bgd-section">
                            <div>
                                <p className="bgd-text">
                                    <span className="green appname">T</span><span className="appname">ech</span><span className="green appname">P</span><span className="appname">ow</span> begins with technical devices out of the four areas of focus that we believe will help us build a fully inclusive digital society.
                                </p>
                                <img src={chart} alt="" />
                            </div>
                            <div>
                                <img src={guy_pointing} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="bg-primary" className="bg-primary">
                    <div className="container">
                        <h2 className="center-text">How it works</h2>
                        <p className="center-para">To donate on TechPow, you can support either an
                            indivdual or organization and make a real impact.
                        </p>
                        <div className="flex-cards">
                            <div>
                                <img src={person_plus} alt="" className="mmd-icon" />
                                <h3 className="flex-card-head mmd-text">Apply as a donor</h3>
                                <p className="flex-card-text">Share your needs with us let's help...</p>
                            </div>
                            <div>
                                <img src={person_icon} alt="" className="md-icon" />
                                <h3 className="flex-card-head">Choose a donee</h3>
                                <p className="flex-card-text">Browse Catalogue</p>
                            </div>
                            <div>
                                <img src={donation_icon} alt="" className="md-icon" />
                                <h3 className="flex-card-head">Make a donation</h3>
                                <p className="flex-card-text">Donate either a technical device or internet data.</p>
                            </div>
                            <div>
                                <img src={update_icon} alt="" className="md-icon" />
                                <h3 className="flex-card-head">Receive an update</h3>
                                <p className="flex-card-text">Get updates regarding the donation process and how you can make a difference.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <Link to="/Donees" className="center-text featured-donees-link">
                            <h2 className="center-text">Featured Donees</h2>
                        </Link>
                        <p className="center-para">
                            One way to reduce digital inequality in Africa is through an act of kindness.
                        </p>
                        <div className="flex-images">
                            <Link to="/Donees" className="flex-img">
                                <div className="flex-img">
                                    <span className="item-needed">Laptop</span>
                                    <div>
                                        <img src={donee1} alt="" className="donee" />
                                        <div className="donee-info">
                                            <h2 className="donee-fullname">Ifunanya Oke</h2>
                                            <p className="grey-text desc">Description</p>
                                            <p className="reason">A description of donee's need...<span className="green"><strong className="r">Read more</strong></span></p>
                                            <div className="item-location">
                                                <div>
                                                    <img src={donation} alt="" className="small-icon" />
                                                    <p className="item">Laptop</p>
                                                </div>
                                                <div>
                                                    <img src={location_icon} alt="" className="sm-icon" />
                                                    <p className="location">Nigeria</p>
                                                </div>
                                            </div>
                                            <div className="butns">
                                                <Link to="/DonorApplicationForm">
                                                    <button className="btn-primary">Donate</button>
                                                </Link>
                                                <div className="shareIcon">
                                                    <p className="share-text">Share</p>
                                                    <img src={shareicon} alt="" className="extra-small-icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/Donees" className="flex-img">
                                <div className="flex-img">
                                    <span className="item-needed">Phone</span>
                                    <div>
                                    <img src={donee2} alt="" className="donee" />
                                        <div className="donee-info">
                                            <h2 className="donee-fullname">Hezron Geteye</h2>
                                            <p className="grey-text desc">Description</p>
                                            <p className="reason">A description of donee's need...<span className="green"><strong className="r">Read more</strong></span></p>
                                            <div className="item-location">
                                                <div>
                                                    <img src={donation} alt="" className="small-icon" />
                                                    <p className="item">Phone</p>
                                                </div>
                                                <div>
                                                    <img src={location_icon} alt="" className="sm-icon" />
                                                    <p className="location">Kenya</p>
                                                </div>
                                            </div>
                                            <div className="butns">
                                                <Link to="/DonorApplicationForm">
                                                    <button className="btn-primary">Donate</button>
                                                </Link>
                                                <div className="shareIcon">
                                                    <p className="share-text">Share</p>
                                                    <img src={shareicon} alt="" className="extra-small-icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/Donees" className="flex-img">
                                <div className="flex-img">
                                    <span className="item-needed">Ipad</span>
                                    <div>
                                    <img src={donee3} alt="" className="donee" />
                                        <div className="donee-info">
                                            <h2 className="donee-fullname">Reem Mohammed</h2>
                                            <p className="grey-text desc">Description</p>
                                            <p className="reason donee-desc">A description of donee's need...<span className="green"><strong className="r">Read more</strong></span></p>
                                            <div className="item-location">
                                                <div>
                                                    <img src={donation} alt="" className="small-icon" />
                                                    <p className="item">Ipad</p>
                                                </div>
                                                <div>
                                                    <img src={location_icon} alt="" className="sm-icon" />
                                                    <p className="location">Egypt</p>
                                                </div>
                                            </div>
                                            <div className="butns">
                                                <Link to="/DonorApplicationForm">
                                                    <button className="btn-primary">Donate</button>
                                                </Link>
                                                <div className="shareIcon">
                                                    <p className="share-text">Share</p>
                                                    <img src={shareicon} alt="" className="extra-small-icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h2 className="center-text">Donate from around the world</h2>
                        <img src={people_map} alt="" className="map" />
                    </div>
                </section>

                <section className="bg-primary">
                    <div className="container">
                        <h2 className="center-text">Some of our potential partners:</h2>
                        <div className="partners-logo">
                            <div>
                                <img src={microsoft} alt="microsoft logo" />
                            </div>
                            <div>
                                <img src={techdev} alt="tech4dev logo" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DefaultLayout>
    );
}

export default LandingPage;