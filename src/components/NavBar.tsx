import { memo } from "react";
import { FC } from "react";
import { User } from "../models/User";
import UserProfileDropdown from "./../UserProfileDropdown";
interface Props{
    className?:string;
    user: User;
}

const NavBar: FC<Props> = ({className, user}) =>{
    return(
        <nav className  = {className + " bg-black flex justify-between fixed h-12 w-screen p-1 mb-96" }>
            <div className =  "flex pl-10">
                <img src = "https://designreset.com/cork/ltr/demo4/assets/img/logo.svg" className = "w-8 -8"></img>
                <h2 className = "pl-4 text-2xl font-semibold text-white">CODEYOGI</h2>
                
            </div>
            <UserProfileDropdown user ={user} ></UserProfileDropdown>
            
        </nav>
    );
}

export default memo(NavBar);