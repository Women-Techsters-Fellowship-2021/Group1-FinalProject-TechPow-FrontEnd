import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';

//import styles
import './style.css';

//import images
import imageOne from '../../resources/images/what we do.png';
import imageTwo from '../../resources/images/our mission.png';
import imageThree from '../../resources/images/Our Belief.png';
import greenMap from '../../resources/images/Unique 1.png';
import secondCircle from '../../resources/images/Unique 2.png';
import FatimaA from '../../resources/images/Team/Fatima A..png';
import FatimaH from '../../resources/images/Team/Fatima H..png';
import Habiba from '../../resources/images/Team/Habiba.png';
import Hager from '../../resources/images/Team/Hager.png';
import Hilda from '../../resources/images/Team/Hilda.png';
import odomero from '../../resources/images/Team/odomero.png';
import Rahmot from'../../resources/images/Team/Rahmot.png';
import Rukayat from '../../resources/images/Team/Rukayat.png';
import Sarah from '../../resources/images/Team/Sarah.png';
import Sally from '../../resources/images/Team/Sally Nyiwende Oketch Kenya (1).jpg';
import ope from '../../resources/images/Team/Opeyemi Akinbode.png';

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
                                  TechPow is a non-profit and social enterprise that creates equitable access to opportunities by providing devices, internet access, digital skills trainings, and tech support for communities left on the disadvantaged side of the digital divide. Also at the same time, empowering individuals, businesses and organizations to do good by donating.
                            </p>
                          </div>
                          <div>
                              <img src={imageOne} alt="" className="about-image" />
                          </div>
                      </div>
                  </div>
              </section>

              <section className="bg-primary top-margin">
                  <div className="container">
                        <div>
                            <p className="flex-text center-text">
                                We envision a digitally inclusive Africa where all people hold the power to improve their lives.
                            </p>
                        </div>
                    </div>
              </section>

              <section>
                  <div className="container">
                      <h2 className="center-text">Our Mission</h2>
                      <div className="split">
                          <div>
                              <img src={imageTwo} alt="" className="about-image mission-img" />
                          </div>
                          <div>
                              <p className="flex-text txt-two">
                                  We aim to reduce <span className="green">The Digital Divide</span>. In the 21st century, access to technology and digital services is a right, not a privilege. Unfortunately, millions of Africans lack access to either a personal computer, internet connection or both. The concept of the digital divide refers to the gap that is growing between the population who do not have access to computers, internet, digital literacy trainings, and technical support - and those who do. Equitable access to information and technology empowers people to achieve their fullest potential.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="top-margin">
                  <div className="container">
                      <div className="split">
                          <div>
                              <h2 className="txt-one">Our Belief</h2>
                              <ul className="flex-text">
                                  <li>
                                      We believe that access to technology is a right, not a privilege.
                                  </li>
                                  <li>
                                      We believe in inspiring the next generation to lead with purpose.
                                  </li>
                                  <li>
                                      We believe that the only way to close the digital divide is to eliminate structural social and economic impediments.
                                  </li>
                                  <li>
                                      We believe that providing everyone with equal access to information and technology allows them to reach their greatest potential.
                                  </li>
                              </ul>
                          </div>
                          <div>
                              <img src={imageThree} alt="" />
                          </div>
                      </div>
                  </div>
              </section>

              <section className="top-margin">
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

              <section className="div5">
                  <div className="container">
                      <h2 className="center-text">What makes us unique</h2>
                      <div className="split">
                          <div className="green-map">
                              <img src={greenMap} alt="green map in a circle" className="mmd-icon" />
                              <p><strong>You choose where to make an impact</strong></p>
                              <p>Whether to donate to friends in your community or someone halfway around Africa, (and for many, it's both), TechPow gives you the chance to make a difference in someone else's life. Donations at TechPow are not only about helping others; they are a way to create connection and relationships.</p>
                          </div>
                          <div className="green-map">
                              <img src={secondCircle} alt="" className="mmd-icon" />
                              <p><strong>To elevate many, one must first lift one.</strong></p>
                              <p>
                                  When a TechPow donation assists someone to gain digital skills and open up doors for themselves, it also open doors for others. That ripple effect can shape the future for a family or an entire community.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="team-list">
                  <div className="container">
                    <h2 className="center-text">The Team</h2>
                      <div className="split">
                          <div>
                            <div className="grey-circle">
                                <img src={Rahmot} alt="" />
                            </div>
                            <div className="grey-line">
                                <h3 className="blue-text">Rahmot Afolabi</h3>
                                <p className="track">Product Owner/Team Lead</p>
                            </div>
                          </div>
                          <div>
                            <div className="grey-circle">
                                <img src={FatimaA} alt="" />
                            </div>
                            <div className="grey-line">
                                <h3 className="blue-text">Fatima Abubakar</h3>
                                <p className="track">Project Manager/Scrum Master</p>
                            </div>
                          </div>
                          <div>
                            <div className="grey-circle">
                                <img src={Hager} alt="" />
                            </div>
                            <div className="grey-line">
                                <h3 className="blue-text">Hager Ashour</h3>
                                <p className="track">Data Scientist</p>
                            </div>
                          </div>
                      </div>
                      <div className="split">
                            <div>
                                <div className="grey-circle">
                                    <img src={Rukayat} alt="" />
                                </div>
                                <div className="grey-line">
                                    <h3 className="blue-text">Rukayat Olapojoye</h3>
                                    <p className="track">Software Developer</p>
                                </div>
                            </div>
                            <div>
                                <div className="grey-circle">
                                    <img src={FatimaH} alt="" />
                                </div>
                                <div className="grey-line">
                                    <h3 className="blue-text">Fatimah Hassan</h3>
                                    <p className="track">Software Developer</p>
                                </div>
                            </div>
                            <div>
                                <div className="grey-circle">
                                    <img src={Sarah} alt="" />
                                </div>
                                <div className="grey-line">
                                    <h3 className="blue-text">Sarah Adebesin</h3>
                                    <p className="track">Software Developer</p>
                                </div>
                            </div>
                      </div>
                      <div className="split">
                            <div>
                                <div className="grey-circle">
                                    <img src={Habiba} alt="" />
                                </div>
                                <div className="grey-line">
                                    <h3 className="blue-text">Habiba Elsawy</h3>
                                    <p className="track">Product Designer</p>
                                </div>
                            </div>
                            <div>
                                <div className="grey-circle">
                                    <img src={Hilda} alt="" />
                                </div>
                                <div className="grey-line">
                                    <h3 className="blue-text">Hilda Okafor</h3>
                                    <p className="track">Product Designer</p>
                                </div>
                            </div>
                            <div>
                                <div className="grey-circle">
                                    <img src={odomero} alt="" />
                                </div>
                                <div className="grey-line">
                                    <h3 className="blue-text">Odomero Omokahfe</h3>
                                    <p className="track">Data Scientist</p>
                                </div>
                            </div>
                        </div>
                      <div className="split">
                        <div>
                            <div className="grey-circle">
                                <img src={Sally} alt="" className="team-img" />
                            </div>
                            <div className="grey-line">
                                <h3 className="blue-text">Sally Oketch</h3>
                                <p className="track">CyberSecurity</p>
                            </div>
                        </div>
                        <div>
                            <div className="grey-circle">
                            </div>
                            <div className="grey-line"></div>
                        </div>
                        <div>
                            <div className="grey-circle">
                                <img src={ope} alt="" className="team-img" />
                            </div>
                            <div className="grey-line">
                                <h3 className="blue-text">Opeyemi Akinbode</h3>
                                <p className="track">Product Designer</p>
                            </div>
                        </div>
                      </div>
                  </div>
              </section>
          </div>
      </DefaultLayout>
    );
}

export default About;