import { CSSProperties } from "react";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement>{
    theme: "indigo" | "blue" | "green" | "yellow" | "red" | "grey";
    counter: number;
    className : string;
    style?: CSSProperties | undefined;
}

export const Progress: FC<Props> = ({style,className,counter, theme}) =>{

    const width = {
            width : counter+"%",
    };
    
    const percent = counter;

    let themeClasses;

    if(theme === "indigo"){
        themeClasses = "bg-indigo-500";
    }
    else if(theme === "blue"){
        themeClasses = "bg-blue-500";
    }else if(theme === "green"){
        themeClasses = "bg-green-500";
    }else if(theme === "yellow"){
        themeClasses = "bg-yellow-500";
    }else if(theme === "red"){
        themeClasses = "bg-red-500";
    }else if(theme === "grey"){
        themeClasses = "bg-grey-500";
    }

    return(
        <div>
        
        <div className={"rounded-full  bg-gray-50 w-full h-4 " + className }>
        <div className={"absolute right-4  text-indigo-500 "}>{percent}%</div>
            <div className={"h-4 rounded-full w-"+counter+ " " + themeClasses } style = {width}></div>
        </div>
        
        </div>
    );
}

Progress.defaultProps = {
    theme:'indigo'
}    
