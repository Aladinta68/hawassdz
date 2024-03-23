import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { Restaurants } from "../pages/restaurants/views/search/index";
import { MainLayout } from "./../layout/main";
import { Login } from "./../pages/login/index";
import { Signup } from "./../pages/signup/index";
import { ForgotPassword } from "./../pages/passwordreset/forgotpassword/index";
import { Setnewpassword } from "./../pages/passwordreset/setnewpassword/index";
import { TripDetails } from "../pages/trips/views/TripDetails";
import { Trips } from './../pages/trips/views/Search/index';
import { Destinations } from './../pages/destinations/views/search/index';
import { Hotels } from '../pages/hotels/views/search/index';
export const Router = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination_details" element={<></>} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurant_details" element={<></>} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel_details" element={<></>} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/trip_details" element={<TripDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/setnewpassword" element={<Setnewpassword />} />
        </Routes>
      </MainLayout>
    </>
  );
};
