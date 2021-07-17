import {FC, memo} from "react";
interface Props{}

const AuthHero: FC<Props> = (props) =>{
    return(
        <div className = "md:visible md:w-1/2 h-screen text-white bg-black bg-no-repeat bg-center bg-75% bg-hero-image">
           
        </div>
    );
};

AuthHero.defaultProps = {}
export default memo(AuthHero);