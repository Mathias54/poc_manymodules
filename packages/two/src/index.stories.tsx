import {Meta, Story} from "@storybook/react/types-6-0";
import MyComponent from "./index";
import React from "react";

export default {
  title: 'MyComponent',
  component: MyComponent,
} as Meta;


const Template: Story = (args) => <MyComponent {...args} />;

export const Normal = Template.bind({});
