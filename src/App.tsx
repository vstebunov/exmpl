import React from 'react';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './common/root';
import DetailWithStore from './store/detailWithStore';
import dataStore from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'page/:currentPage',
    element: <Root />,
  },
  {
    path: 'detail/:id',
    element: <DetailWithStore />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Provider store={dataStore}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
