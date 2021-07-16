import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import LoginPages from './pages/Login.pages';
import SignupPages from './pages/Signup.pages';
import DashboardPages from './pages/Dashboard.pages';
import RecordingsPages from './pages/Recordings.pages';
import AuthHero from './components/AuthHero';
import AuthPages from './pages/Auth.pages';
import AppContainerPages from './pages/AppContainer.pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path = "/" exact>
          <Redirect to = "/login"></Redirect>
        </Route>
        <Route path = {["/login","/signup"]}>
          <AuthPages></AuthPages>
        </Route>
        <Route path = {["/recordings","/dashboard"]}>
          <AppContainerPages></AppContainerPages>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
