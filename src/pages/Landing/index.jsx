import React from 'react';
import people from '../../logo.svg';
import ladypointing from '../../logo.svg';

//import styles
import './style.css';

function LandingPage()
{
    return (
        <div className="landingPage">

        <section>
            <div className="split">
                <div>
                    <h2>
                        Enhancing and Promoting digital inclusion in Africa.
                    </h2>
                    <p>
                    <span className="green appname">T</span><span className="appname">ech</span><span className="green appname">P</span><span>ow</span> is connecting <b>people and organizations </b> that need <b>technical devices and internet data</b> with <b>people that are willing </b>to donate in order to fulfil their dreams.
                    </p>
                    <button className=" btn btn-primary">Learn more</button>
                </div>
                <div>
                    <img src={people} alt="people giving and receiving donations" />
                </div>
            </div>
        </section>

        <section>
            <div className="split">
                <div>
                    Some Logo
                </div>
                <div>
                    Signup Page
                </div>
            </div>
        </section>

        <section>
            <h2>The stats are bleak</h2>
            <div className="split">
                <div>
                    <img src={ladypointing} alt="A lady in a yellow circle pointing" />
                </div>
                <div>
                    <p className="stats">
                        Around <b className="red">90%</b> people do not have access to a computer.
                    </p>
                    <p className="stats">
                        Approximately <b className="red">80%</b> cannot afford internet data.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h2>Bridging Digital Divide</h2>
            <div className="split">
                <div>
                    <p>
                        <span className="green appname">T</span><span className="appname">ech</span><span className="green appname">P</span><span>ow</span> begins with technical devices out of the four areas ofn focus that we believe will help us build a fully inclusive digital society.
                    </p>
                    <img src={people} alt="" />
                </div>
                <div>
                    <img src={people} alt=""/>
                </div>
            </div>
        </section>

        <section>
            <h2>How it works</h2>
            <div className="flex-cards">
                <div>
                    <img src={people} alt="" />
                    <h3 className="flex-card-head">Choose a donee</h3>
                    <p className="flex-card-text">Browse Catalogue</p>
                </div>
                <div>
                    <img src={people} alt="" />
                    <h3 className="flex-card-head">Make a donation</h3>
                    <p className="flex-card-text">Donate either a technical device or internet data.</p>
                </div>
                <div>
                    <img src={people} alt="" />
                    <h3 className="flex-card-head">Receive an update</h3>
                    <p className="flex-card-text">Get updates regarding the donation process and how you can make a difference.</p>
                </div>
            </div>
        </section>

        <section>
            <h2>Featured Donees</h2>
            <p>
                One way to reduce digital inequality in Africa is through an act of kindness.
            </p>
            <div className="flex-images">

                <div>
                    <div className="donee-img">
                        <img src={people} alt="" />
                    </div>
                    <h4>Ifunnaya Oke</h4>
                    <p className="donee-desc">A description of donee's need...</p>
                    <a href="#home" className="green-link">Learn more</a>
                    <div className="flex-icon">
                        <div>
                            <p>Phone icon</p>
                            <p>Phone</p>
                        </div>
                        <div>
                            <p>Location icon</p>
                            <p>Lagos, Nigeria</p>
                        </div>
                    </div>
                    <button className=" btn btn-primary">Donate</button>
                </div>

                <div>
                    <div className="donee-img">
                        <img src={people} alt="" />
                    </div>
                    <h4>Hezron Geteye</h4>
                    <p className="donee-desc">A description of donee's need...</p>
                    <a href="#home" className="green-link">Learn more</a>
                    <div className="flex-icon">
                        <div>
                            <p>Phone icon</p>
                            <p>Phone</p>
                        </div>
                        <div>
                            <p>Location icon</p>
                            <p>Kenya</p>
                        </div>
                    </div>
                    <button className=" btn btn-primary">Donate</button>
                </div>

                <div>
                    <div className="donee-img">
                        <img src={people} alt="" />
                    </div>
                    <h4>Reem Mohammed</h4>
                    <p className="donee-desc">A description of donee's need...</p>
                    <a href="#home" className="green-link">Learn more</a>
                    <div className="flex-icon">
                        <div>
                            <p>Phone icon</p>
                            <p>Phone</p>
                        </div>
                        <div>
                            <p>Location icon</p>
                            <p>Egypt</p>
                        </div>
                    </div>
                    <button className=" btn btn-primary">Donate</button>
                </div>

            </div>
        </section>

        <section>
            <h2>Donate from around the world</h2>
            <img src={people} alt="" />
        </section>

        <section>
            <h2>Some of our potential partners:</h2>
            <div className="partners-logo">
                <div>
                    <img src={people} alt="" />
                </div>
                <div>
                    <img src={people} alt="" />
                </div>
            </div>
        </section>

        </div>
    );
}

export default LandingPage;