import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import ListOfManufacturers from '../manufacturers/listOfManufacturers';
import { Manufacturer } from '../manufacturers/manufacturer';

export default {
  title: 'Example/ListOfManufacturers',
  component: ListOfManufacturers,
  decorators: [withRouter],
} as ComponentMeta<typeof ListOfManufacturers>;

function Template(): ComponentStory<typeof ListOfManufacturers> {
  return function (args) {
    const { manufacturers } = args;
    return <ListOfManufacturers manufacturers={manufacturers} />;
  };
}

const manufacturers: Manufacturer[] = [
  {
    Mfr_ID: 100,
    Mfr_CommonName: 'xyx',
    Country: 'France',
    VehicleTypes: [{
      IsPrimary: true,
      Name: 'test',
    }],
  },
];

export const Finded = Template().bind({});
Finded.args = {
  manufacturers,
};

export const Empty = Template().bind({});
Empty.args = {
  manufacturers: [],
};
