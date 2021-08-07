import { Menu, Transition } from "@headlessui/react";
import userEvent from "@testing-library/user-event";
import { FC, Fragment, memo } from "react";
import { FiInbox, FiLock, FiUser } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { logout } from "./api/auth";
import { User } from "./models/User";

interface Props{
    className?: string;
    user: User;
}

const UserProfileDropdown: FC<Props> = ({user, className}) =>{
    return(
        <Menu as="div" className={` ${className}`}>
           
            <Menu.Button className="pt-1 pr-8"  >
                <img src={user.profile_pic_url} className="object-cover rounded-lg w-7 h-7" />
            </Menu.Button>
            <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 w-48 h-40 bg-white rounded-lg shadow-lg outline-none">
                <Menu.Item>
                    { ({active }) => (
                        <Link to="/profile" className={`py-2 flex px-3.5 ${active ? "text-indigo-500" : "text-black" } `} >
                            <FiUser className = {`w-4 h-4 mt-2 ${active ? "text-indigo-500" : "text-black" } `} />
                            Profile
                        </Link>
                            
                    ) }
                </Menu.Item>
                <Menu.Item>
                    { ({active }) => (
                        <a href="#" className={`py-2 flex px-3.5 ${active ? "text-indigo-500" : "text-black" } `} >
                            <FiInbox className = {`w-4 h-4 mt-2 ${active ? "text-indigo-500" : "text-black" } `} />
                            Inbox
                        </a>
                            
                    ) }
                </Menu.Item>
                <Menu.Item>
                    { ({active }) => (
                        <a href="#" className={`py-2 flex px-3.5 ${active ? "text-indigo-500" : "text-black" } `} >
                            <FiLock className = {`w-4 h-4 mt-2 ${active ? "text-indigo-500" : "text-black" } `} />
                            Lock screen
                        </a>
                            
                    ) }
                </Menu.Item>
                <Menu.Item>
                    { ({active }) => (
                        <button  onClick={() => { logout();
                            window.location.href = "/login";}} className={`py-2 flex px-3.5 ${active ? "text-indigoish" : "text-black" } `} >
                            <IoExitOutline className = {`w-4 h-4 mt-2 ${active ? "text-indigo-500" : "text-black" } `} />
                            Sign Out
                        </button>
                            
                    ) }
                </Menu.Item>
                
            </Menu.Items>
            </Transition>
        </Menu>
    );
};
    
UserProfileDropdown.defaultProps = {

}    

    
export default memo(UserProfileDropdown);