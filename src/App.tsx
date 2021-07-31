
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AuthPages from './pages/Auth.pages';
import AppContainerPages from './pages/AppContainer.pages';
import NotFound from './pages/NotFound';
import { AUTH_TOKEN } from './api/base';


function App() {
  const token = localStorage.getItem(AUTH_TOKEN );
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact>
          {token ? <Redirect to = "/dashboard"/> : <Redirect to = "/login"/>}
        </Route>
        <Route path = {["/login","/signup"]}>
          <AuthPages></AuthPages>
        </Route>
        <Route path = {["/recordings","/dashboard"]}>
          <AppContainerPages></AppContainerPages>
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
