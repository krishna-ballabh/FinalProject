import React from 'react';
import { Button } from "./Button";
import "../../index.css";
import { Meta } from "@storybook/react";
 
export default {
    title: "My Awesome Button",
    component: Button
} as Meta;

export const main: React.VFC<{}> = (args:any) => 
    <Button {...args}  >
        Sign in
    </Button>;