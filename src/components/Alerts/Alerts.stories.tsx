import { Meta } from "@storybook/react";
import { Alerts } from "./Alerts";

const Alert = {
    title: "Alert",
    component: Alerts,
    argTypes:{
        theme:{
            control:{type:"select"}
        }
    }

} as Meta;

export const AlertLine = (args:any) => <Alerts {...args}></Alerts>

AlertLine.args = {
    strong: "Primary!",
    children: "Lorem ipsum is sample text",
    className:"",
    theme:"indigo"
};
export default Alert;