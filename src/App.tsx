import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Root} from './root';
import {Detail} from './detail';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

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

function App() {
    return <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
}

export default App;
