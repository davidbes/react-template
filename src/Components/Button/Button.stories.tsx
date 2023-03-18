import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { variant: 'primary', label: 'hello' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, variant: 'secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, variant: 'tertiary' };

export const Destructive = Template.bind({});
Destructive.args = { ...Primary.args, variant: 'destructive' };
