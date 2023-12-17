import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "src/components/Layout";
import Home from "src/pages/Home";
import CreateOrder from "src/pages/CreateOrder";

export enum ROUTES {
  HOME = "/",
  CREATE_ORDER = "/create-order",
}

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.CREATE_ORDER,
        element: <CreateOrder />,
      },
    ],
  },
]);
