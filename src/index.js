import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Caixa from './components/Caixa/Caixa'
import OpenCart from './components/OpenCart/OpenCart';

import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Caixa />, 
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

