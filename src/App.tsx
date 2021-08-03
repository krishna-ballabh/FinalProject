import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { AUTH_TOKEN } from './api/base';
import { FC,  Suspense } from 'react';
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy"
import { FaSpinner } from 'react-icons/fa';
import AuthLazy from './pages/Auth/Auth.lazy';
import { useState } from 'react';
import { User } from './models/User';
import { useEffect } from 'react';
import { me } from './api/auth';
import AppContext from './App.context';

interface Props{}

const App: FC<Props> = () =>  {

  const [user, setUser] = useState<User>();

  const token = localStorage.getItem(AUTH_TOKEN );

  useEffect(() => {

    if(!token){
      return;
    }

    me().then((u) => setUser(u));
    console.log(user);
  }, []);

  if(!user && token){
    return <div> loding....</div>
  }

    console.log(user);
  return (
    <AppContext.Provider value = ({user, setUser})>
    
    <Suspense fallback = {<div className = "text-red-500 "><FaSpinner className  = "animate-spin"/>loading..</div>}>
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact>
          {user? <Redirect to = "/dashboard"/> : <Redirect to = "/login"/>}
        </Route>
        <Route path = {["/login","/signup"]} exact>
          {user? <Redirect to = "/dashboard" /> : (<AuthLazy onLogin = {setUser}></AuthLazy>)}
        </Route>
        <Route path = {["/recordings","/dashboard"]} exact>
          
            {user? <AppContainerPageLazy user = {user!}/> : <Redirect to = "/login" />}
         
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
    </Suspense> 
    </AppContext.Provider>
  );
}

export default App;
