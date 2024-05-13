import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home";
import { Restaurants } from "../pages/restaurants/views/search/index";
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
import { UserProfile } from "../pages/user/Profile";
import { ProtectedUserRoute } from "./element/ProtectedUserRoute";
import { MyTrips } from "../pages/user/myTrips";
import { MyReservation } from "./../pages/user/reservation/index";
import { AddTripPage } from "./../pages/trips/views/addTrips/index";
import { HotelDetails } from "../pages/hotels/views/details";
import { RestaurantDetails } from "./../pages/restaurants/views/details/index";
import { DestinationDetails } from './../pages/destinations/views/details/index';

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
        path: `/destination_details/:id`,
        element: <DestinationDetails/>,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: `/restaurant_details/:id`,
        element: <RestaurantDetails />,
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
      {
        path: `/hotel_details/:id`,
        element: <HotelDetails />,
      },
      {
        path: "/trips",
        element: <Trips />,
      },
      {
        path: `/trip_details/:id`,
        element: <TripDetails />,
      },
    ],
  },
  {
    element: <ProtectedUserRoute />,
    children: [
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/my_trips",
        element: <MyTrips />,
      },
      {
        path: "/my_reservations",
        element: <MyReservation />,
      },
      {
        path: "/add_trip",
        element: <AddTripPage />,
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
