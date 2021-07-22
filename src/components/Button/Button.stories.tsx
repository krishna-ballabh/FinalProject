import { Button } from "./Button";
import "../../index.css";
import { Meta } from "@storybook/react";
import LockClosedIcon from "@heroicons/react/outline/LockClosedIcon";
import { OutlineButto } from "./OutlineButto";
const Solid =  {
    title: "My Awesome Button",
    component: Button,
    argTypes:{
        theme:{
            control:{type: 'radio'},
        },
    }
} as Meta;



export const main = (args:any) => 
    <Button {...args} ></Button>;
    

main.args = {
    children: "Sign in",
    type: "submit",
    className: "",
    Icon: LockClosedIcon,
    theme: "indigo"
}

export default Solid;