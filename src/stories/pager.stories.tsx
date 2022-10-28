import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Pager from '../common/pager';

export default {
  title: 'Example/Pager',
  component: Pager,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/page/:page',
      routeParams: { page: '1' },
    },
  },
} as ComponentMeta<typeof Pager>;

function Template(): ComponentStory<typeof Pager> {
  return function (args) {
    const { currentPage } = args;
    return <Pager currentPage={currentPage}><div>test</div></Pager>;
  };
}

export const IsFullWork = Template().bind({});
IsFullWork.args = {
  currentPage: 3,
};

export const IsDisablePreviousButton = Template().bind({});
IsDisablePreviousButton.args = {
  currentPage: 1,
};
