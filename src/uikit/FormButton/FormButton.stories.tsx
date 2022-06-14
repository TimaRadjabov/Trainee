import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormButton } from ".";

export default {
  title: "FormButton",
  component: FormButton,
} as ComponentMeta<typeof FormButton>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof FormButton> = (args: any) => (
  <FormButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
