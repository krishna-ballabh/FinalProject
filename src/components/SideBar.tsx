import {FC, memo} from "react";
import { Link } from "react-router-dom";
interface Props{}

const SideBar: FC<Props> = (props) =>{
    return(
        <div className = "h-screen pl-0 bg-gray-800 w-80">
            This is Side bar.
        </div>
    );
};

SideBar.defaultProps = {}
export default memo(SideBar);