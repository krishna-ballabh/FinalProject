import LockClosedIcon from "@heroicons/react/outline/LockClosedIcon";
import { ButtonHTMLAttributes } from "react";
import {FC} from "react";
import "../../index.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: "primary" | "secondary";
    children: string;
}

export const Button: FC<Props> = ({children,className ,theme,...rest}) => {
    const themeClasses = theme === "primary"? 
    "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
    :"bg-gray-800 hover:bg-grey-700 focus:ring-gray-500";

    const iconThemeClasses = 
      theme === "primary"
      ? "text-indigo-500 group-hover:text-indigo-400"
      : "text-gray-500 group-hover:text-gray-400";

    return(
        <button
              {...rest}
              className={"relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white  border border-transparent rounded-md group  focus:outline-none focus:ring-2 focus:ring-offset-2 "+themeClasses+" "+className}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className={"w-5 h-5 " + iconThemeClasses} aria-hidden="true" />
              </span>
              {children}
        </button>
    );
};

Button.defaultProps = {
    theme: 'primary'
}
