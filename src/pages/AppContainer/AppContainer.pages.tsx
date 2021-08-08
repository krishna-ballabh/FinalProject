import {FC, memo} from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { User } from "../../models/User";
import DashboardPages from "./Dashboard.pages";
import RecordingsPages from "./Recordings.pages";
import ProfilePage from "../Profile.pages";
interface Props{
    user:User;
}

const AppContainer: FC<Props> = ({user}) =>{
     return(
        <div className = "flex flex-row">
            <SideBar></SideBar>
        <Switch>
            <Route path = "/dashboard">
                <DashboardPages />
            </Route>
            <Route path  = "/recordings">
                <RecordingsPages />
            </Route>
            <Route path="/profile">
            <ProfilePage user= {user} />
          </Route>
        </Switch>
        
        </div>
    );
};

AppContainer.defaultProps = {}
export default memo(AppContainer);