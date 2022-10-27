import React, {Component} from 'react';
import Root from './common/root';
import {DetailWithStore as Detail} from './store/detailWithStore';
import {Provider} from 'react-redux';
import {dataStore} from './store/store';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />
    },
    {
        path: 'page/:currentPage',
        element: <Root />,
    },
    {
        path: 'detail/:id',
        element: <Detail />
    }
]);

export default class App extends Component<{}> {
    render = () => {
        return <React.StrictMode>
                <Provider store={dataStore}>
                    <RouterProvider router={router} />
                </Provider>
            </React.StrictMode>
    }
}
