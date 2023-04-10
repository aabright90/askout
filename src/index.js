import React from 'react';
import { createRoot } from "react-dom";
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './assets/styles.css'

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App/>,
  },
]);



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
