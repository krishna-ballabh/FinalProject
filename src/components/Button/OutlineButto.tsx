import { ButtonHTMLAttributes } from "react";
import {FC} from "react";
import { IconType } from "react-icons";
import "../../index.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: "indigo" | "gray" | "blue" | "green" | "yellow";
    themeClasses?: string;
    children: string;
    Icon?: IconType;
}

export const OutlineButto: FC<Props> = ({children,className ,Icon, themeClasses, theme,...rest}) => {
  if(theme==="indigo"){
    themeClasses="bg-indigo-700 focus:ring-indigoish";
}else if(theme==="gray"){
    themeClasses="bg-gray-700 ";
}else if(theme==="blue"){
    themeClasses="bg-blue-700 ";
}else if(theme==="green"){
    themeClasses="bg-green-700";
}else if(theme==="yellow"){
    themeClasses="bg-yellow-700  ";
}
    const iconThemeClasses = 
      theme === "indigo"
      ? "text-indigo-500 group-hover:text-indigo-400"
      : "text-gray-500 group-hover:text-gray-400";

    return(
        <button
              {...rest}
              className={" rounded-md  px-4 py-2  text-sm border duration-200  hover:shadow-xl ease-in-out hover:text-white hover:transform"+themeClasses +" "+className}
            >
              {Icon && (<span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Icon className={"w-5 h-5 " + iconThemeClasses} aria-hidden="true" />
              </span>)}
              {children}
        </button>
    );
};

OutlineButto.defaultProps = {
    theme: 'indigo'
}
