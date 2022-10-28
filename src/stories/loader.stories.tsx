import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from '../common/loader';

export default {
  title: 'Example/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

function Template(): ComponentStory<typeof Loader> {
  return function (args) {
    const { isLoading } = args;
    return <Loader isLoading={isLoading}><div>test</div></Loader>;
  };
}

export const IsLoading = Template().bind({});
IsLoading.args = {
  isLoading: true,
};

export const IsNotLoading = Template().bind({});
IsNotLoading.args = {
  isLoading: false,
};
