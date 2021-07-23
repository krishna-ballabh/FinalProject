
import { ButtonHTMLAttributes } from "react";
import {FC} from "react";
import { IconType } from "react-icons";
import "../../index.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: "indigo" | "gray" | "blue" | "green" | "yellow";
    look: "solid" | "outline";
    children: string;
    Icon?: IconType;
}

export const Button: FC<Props> = ({children,className ,Icon,  look,theme,...rest}) => {
    var themeClasses;
  if(theme==="indigo"){
    themeClasses="bg-indigo-700 focus:ring-indigoish";
}else if(theme==="gray"){
    themeClasses="bg-gray-700 ";
}else if(theme==="blue"){
    themeClasses="bg-blue-700 ";
}else if(theme==="green"){
    themeClasses="bg-green-700";
}else if(theme==="yellow"){
    themeClasses="bg-yellow-500  ";
}
 var lookClasees = (look==="solid")? `text-white shadow-2xl hover:shadow-none  ${themeClasses}` : `text-${theme}-500 border-${theme}-600 shadow-none hover:${themeClasses} hover:text-white hover:shadow-2xl `;
    const iconThemeClasses = 
      theme === "indigo"
      ? "text-indigo-500 group-hover:text-indigo-400"
      : "text-gray-500 group-hover:text-gray-400";

    return(
        <button
              {...rest}
              className={"relative flex transition duration-500 justify-center w-32 px-4 py-2 text-sm font-medium border border-transparent rounded-md group  focus:outline-none focus:ring-2 focus:ring-offset-2 "+lookClasees +" "+className}
            >
              {Icon && (<span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Icon className={"w-5 h-5 " + iconThemeClasses} aria-hidden="true" />
              </span>)}
              {children}
        </button>
    );
};

Button.defaultProps = {
    theme: 'indigo'
}
