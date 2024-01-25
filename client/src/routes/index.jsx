import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { Restaurants } from "./../pages/restaurants/index";
import { Layout } from "./../layout/index";
export const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </Layout>
  );
};
