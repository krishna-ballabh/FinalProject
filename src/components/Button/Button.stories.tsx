import React from 'react';
import { Button } from "./Button";
import "../../index.css";
import { Meta } from "@storybook/react";
 
export default {
    title: "My Awesome Button",
    component: Button
} as Meta;

export const Hello: React.VFC<{}> = (args:any) => 
    <Button {...args}  theme = "primary">
        Sign in
    </Button>
