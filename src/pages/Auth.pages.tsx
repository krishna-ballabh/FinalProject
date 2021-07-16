import {FC, memo} from "react";
import {  Route, Switch } from "react-router-dom";
import AuthHero from "../components/AuthHero";
import LoginPages from "./Login.pages";
import SignupPages from "./Signup.pages";
interface Props{}

const Auth: FC<Props> = (props) =>{
    return(
        <div className = "flex flex-row justify-between">
            <Switch>
                <Route path = "/login">
                    <LoginPages></LoginPages>
                </Route>
                <Route path =  "/signup">
                    <SignupPages></SignupPages>
                </Route>
            </Switch>
            <AuthHero></AuthHero>
            
        </div>
    );
};

Auth.defaultProps = {}
export default memo(Auth);