import {FC, memo} from "react";

interface Props{}

const Dashboard: FC<Props> = (props) =>{
    return(
        <div className = "h-24 bg-red-500">
            Soory page not found
        </div>
    );
};

Dashboard.defaultProps = {}
export default memo(Dashboard);