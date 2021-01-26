// Import Helpers
import React from 'react';
import { Switch, Route } from "react-router-dom";

// Imports of Components here
import Navbar from './components/NavigationBar/navBar';
import ViewPatent from './components/PatentPage/PatentView';
import DashBoard from './components/Dashboard/dashboard';
import SignUp from './components/Signup/signup';
import Login from './components/Login/Login';
import ViewUser from './components/Dashboard/Pages/viewUser';
import Logout from './components/Logout/Logout';
// Import Styles
import './App.css';


const App = () => {
  
  const ISAUTHENTICATED = window.localStorage.getItem("isAuthenticated");

  return (
    <div>
        <Navbar isAuthed = {ISAUTHENTICATED}/>
        <Switch>
          <Route exact path="/" />
          <Route path="/Signup" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route exact path="/Patents" render={() => <ViewPatent />}/> 
          <Route exact path="/Logout" component = {Logout} />
          <Route exact path="/Dashboard" render={props => (<DashBoard  {...props}/>)}/>
          <Route path="/Dashboard/ViewUser" render={() => <ViewUser />} />
        </Switch>
      </div>
  );
};

export default App;

