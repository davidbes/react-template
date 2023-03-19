import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconName } from 'Components/Icon/Icon';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', label: 'hello', leadingIcon: IconName.ChevronRight };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, variant: 'secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, variant: 'tertiary' };

export const Destructive = Template.bind({});
Destructive.args = { ...Primary.args, variant: 'destructive' };
