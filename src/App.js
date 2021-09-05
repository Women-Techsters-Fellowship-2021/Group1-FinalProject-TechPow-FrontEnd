import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//import ResponsiveNavbar from './components/Navbar';

//import pages
import LandingPage from './pages/Landing';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* <ResponsiveNavbar /> */}
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/LandingPage" exact>
          <LandingPage />
        </Route>

        <Route path="/Contact" exact>
          <Contact />
        </Route>

        <Redirect to="/" />

      </Switch>
    </Router>
  );
}

export default App;



