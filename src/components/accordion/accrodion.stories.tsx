import React from "react";
import { Story, Meta } from "@storybook/react";

import Accordion from "./accordion.component";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

const Template: Story = (args) => <Accordion {...args} />;

export const Playground = Template.bind({});
