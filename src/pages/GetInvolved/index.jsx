import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DefaultLayout from '../../components/Layout/DefaultLayout';


import './style.css';
//importing images
import imageOne from '../../resources/images/Get Involve1.png';
 import imageTwo from '../../resources/images/Get Involve2.png';
 import imagethree from '../../resources/images/Get Involve3.png';
 import imagefour from '../../resources/images/Get Involve4.png';
 import imagefive from '../../resources/images/Get Involve5.png';
 import career from '../../resources/images/Get Involve6.png';
 import together from '../../resources/images/Get Involve7.png';




function GetInvolved() {
    const { register, handleSubmit} = useForm();

    const subscribe = () => {
        return toast.succcess("Thank you for subscribing to our newsletter!");
    }

    return(
        <DefaultLayout>
            <div className="getinvolved-page">

                <div className="container">
                    <div className="split blue-text2">
                        <h1 className="sub-header">
                            <span className="appname">Get <b className="green appname">Involved</b></span>
                        </h1>
                    
                        <Link to="/Signup">
                            <button className="btn-primary join">
                                Join Us
                            </button>
                        </Link>
                    </div>
                </div>

                <section id="partner">
                    <div className="container">                
                        <div className="split">
                            <div>
                                <img src={imageOne} alt="hand-shaking" className="get-involved-image"/>
                            </div>

                            <div id="partner-text">
                                <h1 className="txt-one">
                                    <span className="appname">Partner With <b></b></span><span className="green appname">Us</span>

                                </h1>
                                <p className="flex-text">
                                    Join and partner with us as a Non-governmental body(NGO) or individual in order to accomplish our goals. TechPow is available for partnership across African countries. Your involvement will help us expand to new countries and build programs all over the world so that we can reach more people in need.
                                </p>
                                <button className="btn-primary get">Get Started</button>               
                            </div>            
                        </div>         
                    </div>
                </section>

                <section className="bg-primary">
                    <div className="container">
                        <div className="split volunteer-container">
                            <div className="vol-container-txt">
                                <h2 className="volunteer-heading vol-txt"> Become A</h2>
                                <h2 className="green volunteer-heading"> Volunteer</h2>
                                <p className="flex-text">
                                    Join and partner with us as a volunteer
                                    in order to accomplish the aims and objectives of 
                                    the organisation. TechPow is available for partnership across African countries. 
                                </p>
                                <button  className="btn-primary">
                                  Get Started
                                </button>
                            </div>
                            <div id="earth-img">
                                <img src={imageTwo} alt="Earth" className="get-involved-image"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="grid-img-section">
                    <div className="container">
                        <div className="grid-area">
                            <h2 className="blue-text center-head">
                                Join Us in Turning Lives Around
                            </h2>
                            <div className="split grid-column2">
                                <img src={imagethree} alt="ngo" className="grid-img-container grid-column1"/>
                                <img src={imagefour} alt="volunteer" className="grid-img-container "/>
                            </div>
                            <div className="split">
                                <img src={imagefive} alt="events" className="grid-img-container grid-column1"/>
                                <img src={career} alt="hand-cross" className="grid-img-container"/>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="help" className="bg-primary">
                    <div className="container">
                        <div className="help-form-container">
                            <h2 className="blue-text center-head">Other Ways to Help</h2>
                            <div className="split">
                                <div>
                                    <img src={together} alt="digital-africa" className="dig-africa"/>
                                </div>

                                <div className="newsletter-flex">
                                    <div className="newsletter-container">
                                        <h5 className="newsletter-text">Newsletter Sign-Up</h5>
                                        <form className="newsletter-form" onSubmit={handleSubmit(subscribe)}>
                                            <input
                                            type="text"
                                            name="newsletter"
                                            className="donee-text-input white-hover"
                                            placeholder="Your Email Address here"
                                            {...register('newsletter', {required: true})}
                                            />
                                            <button className="subscribe btn-primary">
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                    <button className="btn-primary long-blue-btn">
                                            Donate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>      
                </section>

            </div>
        </DefaultLayout>
    )
    
}

export default GetInvolved;