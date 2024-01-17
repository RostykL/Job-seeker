import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "src/components/Layout";
import Freelancer from "src/pages/Freelancer";
import SearchCandidates from "src/pages/Client";
import Deals from "src/pages/Client/Deals";
import CreateOrder from "src/pages/Client/CreateOrder";
import Jobs from "src/pages/Freelancer/Jobs";
import JobsSearch from "src/pages/Freelancer/JobsSearch";
import WithdrawFunds from "src/pages/Freelancer/WidthdrawFunds";
import Support from "src/pages/Support";
import Settings from "src/pages/Settings";
import { ROUTES } from "src/types/routes";
import Client from "src/pages/Client";
import FreelancerNavigation from "src/components/FreelancerNavigation";
import ClientNavigation from "src/components/ClientNavigation";

export const router = createBrowserRouter([
  {
    path: "/config",
    element: <Layout />,
    children: [
      {
        index: false,
        path: ROUTES.SUPPORT,
        element: <Support />,
      },
      {
        index: false,
        path: ROUTES.SETTINGS,
        element: <Settings />,
      },
    ],
  },
  {
    path: ROUTES.FREELANCER,
    element: <Layout />,
    children: [
      {
        index: false,
        path: ROUTES.FREELANCER,
        element: <Freelancer />,
        children: [
          {
            index: false,
            path: ROUTES.FREELANCER_JOBS,
            element: <Jobs />,
          },
          {
            index: false,
            path: ROUTES.FREELANCER_JOB_SEARCH,
            element: <JobsSearch />,
          },
          {
            index: false,
            path: ROUTES.FREELANCER_WITHDRAW_FUNDS,
            element: <WithdrawFunds />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTES.CLIENT,
    element: <Layout />,
    children: [
      {
        index: false,
        path: ROUTES.CLIENT,
        element: <Client />,
        children: [
          {
            index: false,
            path: ROUTES.CLIENT_DEALS,
            element: <Deals />,
          },
          {
            index: false,
            path: ROUTES.CLIENT_CREATE_ORDER,
            element: <CreateOrder />,
          },
          {
            index: false,
            path: ROUTES.CLIENT_SEARCH_CANDIDATES,
            element: <SearchCandidates />,
          },
        ],
      },
    ],
  },
]);
