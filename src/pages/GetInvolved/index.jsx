import React from 'react';
//import { useForm } from 'react-hook-form';
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
    return(
        <DefaultLayout>
            <div className="getinvolve-page">
                <div className="blue-text2">
                    
                        <button className="join">
                            Join Us

                        </button>

                </div>
                <section>
                    <div className="container">
                            <h1 className="sub-header">
                                <span className="appname">Get <b className="green appname">Involved</b></span>
                            </h1>
                        <div className="split">
                            <div >
                             
                              <img src={imageOne} alt="hand-shaking" className="get-involved-image"/>

                            </div>
                            <div>
                            <h1 className="txt-one">
                                <span className="appname">Partner With <b></b></span><span className="green appname">Us</span>

                            </h1>
                            <p className="flex-text">
                                Join and partner with us as a Non-governmental body 

                                in order to accomplish the aims and objectives of 
                                the organisation TechPow avails for partnership across
                                Afircan countries. Your involvement help us expand 
                                to new countries and build programs all over the 
                                world so that we may reach more people in need.
                            </p>
                                
                                 <button className="btn-primary get">
                                    Get Started
                                </button>
                            
                               
                        </div>
                            
                        </div>
                        
                    </div>

                </section>
                <section>
                    <div className="vol-teer">
                        <div className="split">
                            <div>
                                <div className="become">
                                    <hi className="sub-header"> Become A</hi>
                                      <br/> 
                                    <hi className="green appname"> Volunteer</hi>
                                </div>
                             <p className="flex-text2">
                                Join and partner with us as a Non-governmental body 

                                in order to accomplish the aims and objectives of 
                                the organisation TechPow avails for partnership across
                                Afircan countries. 
                             </p>
                             <button  className="btn-primary get">
                                  Get Started
                             </button>
                            </div>
                            <div>
                            <img src={imageTwo} alt="Earth" className="get-involved-image"/>

                            </div>

                        </div>

                    </div>
                </section>
                <section>
                        <div>
                            <h2 className="blue-text">Join Us in Turning Lives Around</h2>
                        </div>
                        <div className="all-images">
                            <div className="career-images">
                            <div>
                            <img src={imagethree} alt="ngo" className="conference"/>
                            {/* <h4 className="conference"> NGO</h4> */}
                            </div>
                              <div>
                            <img src={imagefour} alt="volunteer" className="two-ppl"/>
                         </div>
                        </div>
                        <div className="vol-primary">
                          <div>
                            <img src={imagefive} alt="events" className="eve-hall"/>
                            </div>
                             <div>
                            <img src={career} alt="hand-cross" className="cross-hands"/>
                            </div>

                        </div>

                        </div>


                        
                </section>
                <section className="help">
                    <div className="container">
                        <h2 className="blue-text">Other Ways to Help</h2>
                    </div>
                    <div className="split">
                        <div>
                            <img src={together} alt="digital-africa" className="dig-africa"/>
                      </div>
                     <div className="newsletter-container">
                        <form className="newsletter-form" >
                          <h5 className="new">Newsletter Sign-Up</h5> 
                            <input
                            type="text"
                            className="new-text-input"
                            placeholder="Your Email Address here"
                            />
                            <div>
                                <button className="blue-text">
                                    Subscribe

                                </button>
                            </div>

                        </form>
                        <div className="blue-text3">
                            <button className="don">
                                Donate
                            </button>
                        </div>

                    </div>

                    </div>
                    
                </section>

            </div>
        </DefaultLayout>
    )
    
}

export default GetInvolved;