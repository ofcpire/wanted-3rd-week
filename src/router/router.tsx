import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import SearchPage from '../pages/SearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
