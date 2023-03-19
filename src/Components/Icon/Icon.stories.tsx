import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, IconName } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { icon: IconName.ChevronRight };
