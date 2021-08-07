import { useContext } from "react";
import {FC, memo} from "react";
import { logout } from "../api/auth";
import AppContext from "../App.context";
import { User } from "../models/User";

import { Button } from "./Button/Button";
interface Props{
}

const SideBar: FC<Props> = () =>{


    return(
        <div>
        <div className = "h-full pl-0 bg-gray-800 w-80">
            This is Side bar.
        </div>
        
        </div>
    );
};

SideBar.defaultProps = {}
export default memo(SideBar);