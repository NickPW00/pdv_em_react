import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from './App.jsx';
import Caixa from './components/Caixa/Caixa'
import Carrinho from './components/Carrinho/Carrinho.jsx';
import Metodo from './components/Metodo/Metodo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Caixa />,
      },
      {
        path: "/carrinho",
        element: <Carrinho />,
        children:[
          {
            path: "metodo",
            element: <Metodo />,
          },
        ]
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

