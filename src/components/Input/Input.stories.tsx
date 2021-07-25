import Input from "./Input";

const InputForm = {
    title : "Input",
    component : Input,
    argTypes: {
        theme: {
            control: {type: "select"},
        }
    }
};

export const Inputs = (args: any) => <Input {...args}></Input>;
Inputs.args ={
    placeholder: "Email address",

    className: "",
};

export default InputForm;