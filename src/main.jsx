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

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('data.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/donations/:id',
        element:<DonationDetails></DonationDetails>,
        loader: ()=> fetch('data.json')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
