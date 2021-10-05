import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

//import pages
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import CreateNewPassword from './pages/NewPassword';
import Authentication from './pages/Authentication';
import AppStateProvider from './components/AppStateProvider';
import DoneeApplicationForm from './pages/DoneeApplicationForm';
import DonorApplicationForm from './pages/DonorApplicationForm';
import About from './pages/About';
import TabNav from './components/TabNav';
import PersonalInfo from './pages/DoneeApplicationForm/PersonalInfo';
import Request from './pages/DoneeApplicationForm/Request';
import Verification from './pages/DoneeApplicationForm/Verification';
import EmailVerification from './pages/EmailVerification';
import Donees from './pages/Donees';
import Searchbox from './components/Searchbox';
import ReadMore from './pages/ReadMore';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './pages/PrivacyPolicy/TermsOfUse'
import GetInvolved from './pages/GetInvolved';
import ThankyouCard from './components/Thankyou-cardDonee';
import ThankyouCardDonor from './components/Thankyou-cardDonor';
import Modal from './components/Modal';
import IdentityVerification from './pages/Identity Verification';
import Loader from './components/Loader';

function App() {
  // AOS.init();
  
  return (
    <AppStateProvider>
      <ToastContainer />
      <Router>
        <Switch>
          
          <Route path="/" exact>
            <LandingPage />
          </Route>

          <Route path="/SignUp" exact>
            <SignUp />
          </Route>

          <Route path="/Login" exact>
            <Login />
          </Route>

          <Route path="/Home" exact>
            <Home />
          </Route>

          <Route path="/About" exact>
            <About />
          </Route>

          <Route path="/Contact" exact>
            <Contact />
          </Route>

          <Route path="/ForgotPassword" exact>
            <ForgotPassword />
          </Route>

          <Route path="/CreateNewPassword" exact>
            <CreateNewPassword />
          </Route>

          <Route path="/Authentication" exact>
            <Authentication />
          </Route>

          <Route path="/DoneeApplicationForm" exact>
            <DoneeApplicationForm />
          </Route>

          <Route path="/DonorApplicationForm" exact>
            <DonorApplicationForm />
          </Route>

          <Route path="/TabNav" exact>
            <TabNav />
          </Route>

          <Route path="/PersonalInfo" exact>
            <PersonalInfo />
          </Route>

          <Route path="/Request" exact>
            <Request />
          </Route>


          <Route path="/Verification" exact>
            <Verification />
          </Route>

          <Route path="/EmailVerification" exact>
            <EmailVerification />
          </Route>

          <Route path="/Donees" exact>
            <Donees />
          </Route>

          <Route exact path="/donees/:doneeid"> 
            <ReadMore />
          </Route>

          <Route path="/Searchbox">
            <Searchbox />
          </Route>
          <Route path="/Thankyou-cardDonee">
            <ThankyouCard />
          </Route>

          <Route path="/Thankyou-cardDonor">
            <ThankyouCardDonor />
          </Route>

          <Route path="/PrivacyPolicy">
						<PrivacyPolicy />
					</Route>

          <Route path="/TermsOfUse">
						<TermsOfUse />
					</Route>

          <Route path="/GetInvolved">
						<GetInvolved />
					</Route>
          
          <Route path="/GetInvolved">
						<IdentityVerification />
					</Route>

          <Route path="/Modal">
						<Modal />
					</Route>

          <Route path="/Loader">
						<Loader />
					</Route>

          <Redirect to="/" />

        </Switch>
      </Router>
    </AppStateProvider>
  );
}

export default App;



