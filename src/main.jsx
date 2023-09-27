import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Home/Home';
import Donation from './Donation/Donation';
import DonationDetails from './DonationDetails/DonationDetails';
import ErrorPage from './ErrorPage/ErrorPage';
import Statistics from './Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/donations/:id',
        element:<DonationDetails></DonationDetails>,
        loader: ()=> fetch('/data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
