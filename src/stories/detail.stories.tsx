import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Detail } from '../detail/detail';
import { Manufacturer } from '../manufacturers/manufacturer';

export default {
    title: 'Example/Detail',
    component: Detail,
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: '/detail/:id',
            routeParams: { id: '100' },
        }
    }
} as ComponentMeta<typeof Detail>;

const Template: ComponentStory<typeof Detail> = (args) => <Detail {...args} />;

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

export const NotFinded = Template.bind({});
NotFinded.args = {
    manufacturers,
};
NotFinded.parameters = {
    reactRouter: {
        routePath: '/detail/:id',
        routeParams: { id: '101' },
    }
}
