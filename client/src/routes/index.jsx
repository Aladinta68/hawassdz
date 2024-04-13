// Router.js

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home";
import { Restaurants } from "../pages/restaurants/views/search/index";
import { MainLayout } from "./../layout/main";
import { Login } from "./../pages/login/index";
import { Signup } from "./../pages/signup/index";
import { ForgotPassword } from "./../pages/passwordreset/forgotpassword/index";
import { Setnewpassword } from "./../pages/passwordreset/setnewpassword/index";
import { TripDetails } from "../pages/trips/views/TripDetails";
import { Trips } from "./../pages/trips/views/Search/index";
import { Destinations } from "./../pages/destinations/views/search/index";
import { Hotels } from "../pages/hotels/views/search/index";
import ProtectedLoginRoute from "./element/ProtectedLoginRoute";
import PublicRoute from "./element/PublicRoute";
import { NotFound } from "./../pages/NotFound/index";

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/destinations",
        element: <Destinations />,
      },
      {
        path: "/destination_details",
        element: <></>,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/restaurant_details",
        element: <></>,
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
      {
        path: "/hotel_details",
        element: <></>,
      },
      {
        path: "/trips",
        element: <Trips />,
      },
      {
        path: "/trip_details",
        element: <TripDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    element: <ProtectedLoginRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/setnewpassword",
        element: <Setnewpassword />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
