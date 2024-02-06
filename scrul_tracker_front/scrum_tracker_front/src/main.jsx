import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './style.css'
import Router from './router/Router';

const router = createBrowserRouter([
  { path: "*", Component: Router },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>,
)
