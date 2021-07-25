import { FC } from "react";
import { Avtar } from "./Avtar";

interface Props{
    profiles: string[];
    className?:string;
}

export const AvtarsStack: FC<Props> = ({profiles,className}) => {
    const profilesArray = profiles;
    let extraProfiles = 0;
    if(profilesArray.length > 4){
        extraProfiles = profilesArray.length-4;
    }

    const count = extraProfiles === 0? profilesArray.length : 4;
    return(
        <div className = {" " + className}>
            <div className="relative flex mt-6 ">
        {profilesArray.map((child, index) => {
          const distance = index * 8;
          if (index < 4) {
            return (
              <Avtar src={child} className={"transition duration-300 transform hover:-translate-y-1 shadow-lg border border-white  absolute left-" + distance} style = {{left:distance}}/>
            );
          }
          if (index > 3) {
            return (
              <span
                className={
                  "transition duration-300 transform hover:-translate-y-1 absolute left-32 text-indigo-500 bg-white mt-2 shadow-lg rounded-full py-1 px-1.75  text-xs"
                }
              >
                +{extraProfiles} more
                
              </span>
              
            );
          }
        })}
        
      </div>
        </div>

    );
}

AvtarsStack.defaultProps = {
    
}