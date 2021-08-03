import {FC, memo} from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import { User } from "../../models/User";
import LoginPages from "./Login.pages";
import SignupPages from "./Signup.pages";
interface Props{
    onLogin: (user: User) => void;
}

const Auth: FC<Props> = (props) =>{
    return(
        <div className = "flex flex-row justify-between">
            <Switch>
                <Route path = "/login">
                    <LoginPages onLogin = {props.onLogin}/>
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