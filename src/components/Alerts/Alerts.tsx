import { Transition } from "@headlessui/react";
import { ButtonHTMLAttributes } from "react";
import { useState } from "react";
import { memo } from "react";
import { FC} from "react";
import { IoClose } from "react-icons/io5"
 
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:string;
    theme?: "Primary" | "Warning" | "Success" | "Info" | "Error";

}
export const Alerts: FC<Props> = ({theme,children,className, ...rest}) => {
    const [isShow, setShow] = useState(true);
    var themeClasses
    if(theme === "Primary")
        themeClasses = "bg-indigo-700 text-indigo-900"
        else if(theme==="Error"){
            themeClasses="bg-red-700 text-red-900 ";
        }else if(theme==="Info"){
            themeClasses="bg-blue-700 text-blue-900 ";
        }else if(theme==="Success"){
            themeClasses="bg-green-700 text-green-900 ";
        }else if(theme==="Warning"){
            themeClasses="bg-yellow-700 text-yellow-900 ";
        }
    return(
        <Transition show = {isShow} >
        <div className = {"p-1 bg-opacity-10 flex justify-between" + className + " " +themeClasses}>
            <p>
            <strong>{theme}! </strong>{children}</p>
            <button {...rest} onClick = {() =>setShow(false)} ><IoClose className = "w-6 h-6"/></button>
            
        </div>
        </Transition>
    );
}

Alerts.defaultProps = {
    theme:"Primary",
}

export default memo(Alerts);