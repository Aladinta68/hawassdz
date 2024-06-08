import React from "react";
import { MainLayout } from "../../layout/main";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useQuery } from "@apollo/client";
import { GetUserInformation } from "../../api/user/query";
import { LoadingSpinner } from './../../components/LoadingSpinner/index';

export const ProtectedUserRoute = () => {
  const accessToken = Cookies.get("accessToken");

  const { loading, error, data } = useQuery(GetUserInformation, {
    context: {
      headers: {
        Authorization: accessToken,
      },
    },
    skip: !accessToken, 
  });

  if (!accessToken) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    console.error(error);
    Cookies.remove("accessToken");
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
