import { Meta } from "@storybook/react";
import {AvtarsStack} from "./AvtarsStack";

const Avt = {
  title: "Avtar",
  component: AvtarsStack,
  
} as Meta;

export const Avatar = (args: any) => <AvtarsStack {...args}></AvtarsStack>;

Avatar.args = {
    profiles: ["https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg","https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg","https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg","https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg","https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"],
    className : "",
};

export default Avt;