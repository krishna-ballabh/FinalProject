
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import AuthPages from './pages/Auth.pages';
import AppContainerPages from './pages/AppContainer.pages';
import NotFound from './pages/NotFound';

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
        <Route>
            <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
