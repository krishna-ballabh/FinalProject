import { ButtonHTMLAttributes } from "react";
import { memo } from "react";
import { FC} from "react";
import { IoClose } from "react-icons/io5"
 
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    strong: string;
    children:string;
    theme?: "indigo" | "yellow" | "blue" | "gray" | "green";
    themeClasses?: string;
}
export const Alerts: FC<Props> = ({strong, theme, themeClasses,children,className, ...rest}) => {
    if(theme === "indigo")
        themeClasses = "bg-indigo-700 text-indigo-900"
        else if(theme==="gray"){
            themeClasses="bg-gray-700 text-gray-900 ";
        }else if(theme==="blue"){
            themeClasses="bg-blue-700 text-blue-900 ";
        }else if(theme==="green"){
            themeClasses="bg-green-700 text-green-900 ";
        }else if(theme==="yellow"){
            themeClasses="bg-yellow-700 text-yellow-900 ";
        }
    return(
        <div className = {"p-1 bg-opacity-10 flex justify-between" + className + " " +themeClasses}>
            <p>
            <strong>{strong}</strong>{children}</p>
            <button {...rest}><IoClose /></button>
            
        </div>
    );
}

Alerts.defaultProps = {
    theme:"indigo",
}

export default memo(Alerts);