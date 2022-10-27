import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from '../common/loader';

export default {
  title: 'Example/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true
};

export const IsNotLoading = Template.bind({});
IsNotLoading.args = {
    isLoading: false
};
