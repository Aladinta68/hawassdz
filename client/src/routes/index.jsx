import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { Restaurants } from "./../pages/restaurants/index";
import { Layout } from "./../layout/index";
import { Login } from "./../pages/login/index";
import { Signup } from "./../pages/signup/index";
import { ForgotPassword } from "./../pages/passwordreset/forgotpassword/index";
import { Setnewpassword } from "./../pages/passwordreset/setnewpassword/index";
import { Trips } from './../pages/trips/index';
export const Router = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/setnewpassword" element={<Setnewpassword />} />
        </Routes>
      </Layout>
    </>
  );
};
