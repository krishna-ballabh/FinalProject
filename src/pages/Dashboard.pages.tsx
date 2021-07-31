import { useEffect, useState } from "react";
import {FC, memo} from "react";
import { Link } from "react-router-dom";
import { Datum, fetchGroups } from "../api/group";
import Input from "../components/Input/Input";

interface Props{}

const Dashboard: FC<Props> = (props) =>{
    const [user,setUser] = useState<Datum[]>([]);
    const [query,setQuery] = useState("");
   useEffect(() => {
       fetchGroups( {status: "all-groups" , query:query}).then((data) => {
           setUser(data);
       });
   }, [query]);
   
   return (
       <div>
           This is a dashboard <Link to="/recording"><span className="text-indigo-400 hover:underline">Got to Recordings</span></Link>

       <Input  placeholder="search" onChange={
           (event) => setQuery(event.target.value)
           } 
           />

       
       {user.map((profile) =>{
           return (
               <div className="flex w-full border rounded-sm bg-gray-50 hover:bg-gray-200 h-14">
                   <img alt="" src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg" className="object-cover w-12 h-10 mt-2 mr-2 rounded-full" />
                   <div>
                   <p className="font-medium">{profile.name}</p>
                   <p className="text-sm text-gray-500">{profile.description}</p>
                   </div>
               </div>
           )
       })}
       </div>
       
   );
};

Dashboard.defaultProps = {}
export default memo(Dashboard);