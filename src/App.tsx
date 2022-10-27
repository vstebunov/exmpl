import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Root} from './root';
import {Detail} from './detail';
import {Loader} from './loader';
import axios from 'axios';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import {Manufacturer} from './manufacturer';
import 'bootstrap/dist/css/bootstrap.css'

function App() {

    const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root manufacturers={manufacturers} />
        },
        {
            path: 'page/:currentPage',
            element: <Root manufacturers={manufacturers} />,
        },
        {
            path: 'detail/:id',
            element: <Detail manufacturers={manufacturers} />
        }
    ]);

    axios.get('/getallmanufacturers?format=json', {
        baseURL: 'https://vpic.nhtsa.dot.gov/api/vehicles'
    }).then( response => {
        console.log(setManufacturers, manufacturers, response);
        manufacturers.push(...response.data.Results)
        setManufacturers(manufacturers);
    });

    return <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
}

export default App;
