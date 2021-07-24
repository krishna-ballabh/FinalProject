import { Progress } from "./Progress"


const ProgressBar = {
    title: "Progress Bar",
    component: Progress,
    argTypes:{
        theme:{
            control:{type:"select"}
        },
        counter:{
            control:{
                type:"range"
            }
        }
    }
};
export const main = (args:any) => (<Progress {...args}></Progress>);
main.args ={
    counter:0,
    className: ""
};
export default ProgressBar;