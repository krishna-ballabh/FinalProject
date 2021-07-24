import { HtmlHTMLAttributes } from "react";
import {FC } from "react";

interface Props extends HtmlHTMLAttributes<HTMLImageElement>{
className?:string;
src?:string;
}

export const Avtar: FC<Props> = ({className,src}) => {
    return (
        <div>
        <img src={src} className={"object-cover w-10 rounded-full h-10"+ className} />
        </div>
        
    );
};
    
Avtar.defaultProps = {

}    
