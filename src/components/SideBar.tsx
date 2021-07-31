import {FC, memo} from "react";
import { logout } from "../api/auth";

import { Button } from "./Button/Button";
interface Props{}

const SideBar: FC<Props> = (props) =>{
    return(
        <div>
        <div className = "h-full pl-0 bg-gray-800 w-80">
            This is Side bar.
        </div>
        <Button onClick = {() =>{
            logout();
            window.location.href = "/login";
        }} 
          look = "solid"
        >
          Logout
        </Button>
        </div>
    );
};

SideBar.defaultProps = {}
export default memo(SideBar);