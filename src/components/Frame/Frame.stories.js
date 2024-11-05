import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,
  argTypes: {
    solidButton: {
      options: ["solid-button", "disabled", "outline-button"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    solidButton: "solid-button",
    className: {},
    divClassName: {},
    text: "Rent",
  },
};
