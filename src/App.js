import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//import ResponsiveNavbar from './components/Navbar';

//import pages
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
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

        <Route path="/Contact" exact>
          <Contact />
        </Route>

        <Redirect to="/" />

      </Switch>
    </Router>
  );
}

export default App;



