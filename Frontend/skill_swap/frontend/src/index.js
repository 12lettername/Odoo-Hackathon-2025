import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Request from './Pages/Request';
import Swap_Platform from './Pages/Swap_Platform';
import Swap_Requests from './Pages/Swap_Requests';
import User_Profile from './Pages/User_Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'login',
      element: <Login></Login>
    },
    {
      path:'request',
      element:<Request></Request>
    },
    {
      path:'swap-platform',
      element:<Swap_Platform></Swap_Platform>
    },
    {
      path:'swap-requests',
      element:<Swap_Requests></Swap_Requests>
    },
    {
      path:'profile',
      element:<User_Profile></User_Profile>
    },
  ]
)


root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
