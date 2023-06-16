import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import EventPage, {
  loader as earthquakeLoader,
  action as earthquakeAction,
} from "./Pages/Events";
import HomePage from "./Pages/Home";
import EventDetailPage, { loader as earthDetailLoader } from "./Pages/Detail";
import { filterDataLoader } from "./util/FilterData";
import { action as clearFiltersAction } from "./Pages/ClearFilter";
import { loader as redirectLoader } from "./Pages/Redirect";
import AboutPage from "./Components/About";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: filterDataLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "earthquakes",
        children: [
          {
            index: true,
            element: <EventPage />,
            id: "earthquakes",
            loader: earthquakeLoader,
            action: earthquakeAction,
          },
          {
            path: ":earthquakeId",
            element: <EventDetailPage />,
            id: "earth-detail",
            loader: earthDetailLoader,
          },
        ],
      },
      {
        path: "weather",
        id: "weather",
        element: <EventPage />,
        loader: earthquakeLoader,
      },
      {
        path: "clear-filters",
        action: clearFiltersAction,
      },
      {
        path: "*",
        loader: redirectLoader,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
