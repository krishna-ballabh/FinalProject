import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { AUTH_TOKEN } from './api/base';
import { lazy, Suspense } from 'react';
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy"
import { FaSpinner } from 'react-icons/fa';
import AuthLazy from './pages/Auth/Auth.lazy';

function App() {
  const token = localStorage.getItem(AUTH_TOKEN );
  return (
    <Suspense fallback = {<div className = "text-red-500 "><FaSpinner className  = "animate-spin"/>loading..</div>}>
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact>
          {token ? <Redirect to = "/dashboard"/> : <Redirect to = "/login"/>}
        </Route>
        <Route path = {["/login","/signup"]} exact>
          {token? <Redirect to = "/dashboard" /> : (<AuthLazy></AuthLazy>)}
        </Route>
        <Route path = {["/recordings","/dashboard"]} exact>
          
            <AppContainerPageLazy></AppContainerPageLazy>
         
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
