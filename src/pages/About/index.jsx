import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';

//import styles
import './style.css';

//import images
import imageOne from '../../resources/images/Donee Application.png';

function About() {
  return (
      <DefaultLayout>
          <div className="about-page">
              <section>
                  <div className="container">
                      <div className="split">
                          <div>
                              <h2 className="txt-one">What We Do</h2>
                              <p className="flex-text">
                                  TechPow is a non-profit and social enterprise that creates equitable access to opportunities by providing devices, internet access, digital skills trainings, and tech support for communities left on the disadvantaged side of the digital divide, while at the same time, empowering individuals, businesses and organizations to do good by donating.
                            </p>
                          </div>
                          <div>
                              <img src={imageOne} alt="" />
                          </div>
                      </div>
                  </div>
              </section>

              <section>
                  <div className="container">
                      <h2 className="center-text">Our Mission</h2>
                      <div className="split">
                          <div>
                              <img src={imageOne} alt="" />
                          </div>
                          <div>
                              <p className="flex-text">
                                  We aim to reduce <span className="green">The Digital Divide</span>. In the 21st century, access to technology and digital services is a right, not a privilege. Unfortunately, millions of Africans lack access to either a personal computer, internet connection or both. The concept of the digital divide refers to the gap that is growing between the population who do not have access to computers, internet, digital literacy trainings, and technical support - and those who do. Equitable access to information and technology empowers people to achieve their fullest potential.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              <section>
                  <div className="container">
                      <h2 className="center-text">Our Vision</h2>
                      <div className="split">
                          <div>
                              <p className="flex-text">
                                We envision a digitally exclusive Africa where all people hold the power to improve their lives.
                              </p>
                          </div>
                          <div>
                            <img src={imageOne} alt="" />
                          </div>
                      </div>
                  </div>
              </section>

              <section>
                  <div className="blue-div">
                      <div className="blue-div-texts">
                          <h2>Our Team</h2>
                          <p>
                              We are TechPow
                          </p>
                          <p>
                              As you are reading this, 10+ tech geeks are tweaking TechPow to perfection with just one thing in mind: bridging the digital divide in Africa. Unless, it's the middle of the night , that's when some of us sleep.
                          </p>
                          <p>
                              We are a team of individuals commited to social good through our social works.
                          </p>
                      </div>
                  </div>
              </section>

              <section className="team-list">
                  <div className="container">
                      <div className="split">
                          <div>
                            <div className="grey-circle"></div>
                            <div className="grey-line"></div>
                          </div>
                          <div>
                            <div className="grey-circle"></div>
                            <div className="grey-line"></div>
                          </div>
                          <div>
                            <div className="grey-circle"></div>
                            <div className="grey-line"></div>
                          </div>
                      </div>
                      <div className="split">
                            <div>
                                <div className="grey-circle"></div>
                                <div className="grey-line"></div>
                            </div>
                            <div>
                                <div className="grey-circle"></div>
                                <div className="grey-line"></div>
                            </div>
                            <div>
                                <div className="grey-circle"></div>
                                <div className="grey-line"></div>
                            </div>
                      </div>
                      <div className="split">
                            <div>
                                <div className="grey-circle"></div>
                                <div className="grey-line"></div>
                            </div>
                            <div>
                                <div className="grey-circle"></div>
                                <div className="grey-line"></div>
                            </div>
                            <div>
                                <div className="grey-circle"></div>
                                <div className="grey-line"></div>
                            </div>
                        </div>
                      <div className="split">
                        <div>
                            <div className="grey-circle"></div>
                            <div className="grey-line"></div>
                        </div>
                        <div>
                            <div className="grey-circle"></div>
                            <div className="grey-line"></div>
                        </div>
                        <div>
                            <div className="grey-circle"></div>
                            <div className="grey-line"></div>
                        </div>
                      </div>
                  </div>
              </section>
          </div>
      </DefaultLayout>
    );
}

export default About;