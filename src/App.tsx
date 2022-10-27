import React, {Component} from 'react';
import './App.css';
import Root from './root';
import {DetailWithStore as Detail} from './detailWithStore';
import {Provider} from 'react-redux';
import {dataStore} from './store';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

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
