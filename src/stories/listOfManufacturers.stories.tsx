import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListOfManufacturers } from '../manufacturers/listOfManufacturers';
import { Manufacturer } from '../manufacturers/manufacturer';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
    title: 'Example/ListOfManufacturers',
    component: ListOfManufacturers,
    decorators: [withRouter],
} as ComponentMeta<typeof ListOfManufacturers>;

const Template: ComponentStory<typeof ListOfManufacturers> = (args) => <ListOfManufacturers {...args} />;

const manufacturers: Manufacturer[] = [
    { Mfr_ID: 100,
        Mfr_CommonName: 'xyx',
        Country: 'France',
        VehicleTypes: [ {
            IsPrimary: true,
            Name: 'test'
        }]
    }
]

export const Finded = Template.bind({});
Finded.args = {
    manufacturers,
};

export const Empty = Template.bind({});
Empty.args = {
    manufacturers: [],
};

