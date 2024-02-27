import { MyButton } from "./MyButton";

export default {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    type: {
      type: "string",
      description: "выбор внешнего вида кнопки",
      defaultValue: "primary",
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
    },
    isDisabled: {
      control: "boolean",
    },
    text: {
      type: "string",
      description: "текст для кнопки",
      defaultValue: "Войти",
    },
  },
};

const Template = (arg) => <MyButton {...arg} />;

export const Default = Template.bind({});

Default.args = {
  type: "primary",
};
