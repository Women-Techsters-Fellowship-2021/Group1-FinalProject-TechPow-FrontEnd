import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import ResponsiveNavbar from './components/Navbar';

//import pages
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
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

function App() {
  return (
    <AppStateProvider>
      <ToastContainer />
      <Router>
        {/* <ResponsiveNavbar /> */}
        <Switch>
          <Route path="/" exact>
            <LandingPage />
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

          <Redirect to="/" />

        </Switch>
      </Router>
    </AppStateProvider>
  );
}

export default App;



