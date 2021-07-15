import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import LoginPages from './pages/Login.pages';
import SignupPages from './pages/Signup.pages';
import DashboardPages from './pages/Dashboard.pages';
import RecordingsPages from './pages/Recordings.pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact>
          <Redirect to = "/login"></Redirect>
        </Route>
          <Route path = "/login">
            <LoginPages />
          </Route>
          <Route path = "/signup">
            <SignupPages />
          </Route>
          <Route path = "/dashboard">
            <DashboardPages />
          </Route>
          <Route path  = "/recordings">
            <RecordingsPages />
          </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
