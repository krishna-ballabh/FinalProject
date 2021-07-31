import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { AUTH_TOKEN } from './api/base';
import { lazy, Suspense } from 'react';
import { FaSpinner } from 'react-icons/fa';

const AppContainerPageLazy = lazy(() => import("./pages/AppContainer.pages"));

const AuthPageLazy = lazy(() => import("./pages/Auth.pages"));

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
          {token? <Redirect to = "/dashboard" /> : (<AuthPageLazy></AuthPageLazy>)}
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
