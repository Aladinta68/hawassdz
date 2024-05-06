import React from "react";
import { MainLayout } from "../../layout/main";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import useProfileStore from "../../store/profile";
import { useQuery } from "@apollo/client";
import { GetUserInformation } from './../../api/user/query';

export const ProtectedUsernRoute = () => {
  const setProfileData = useProfileStore((state) => state.setProfileData);
  const accessToken = Cookies.get("accessToken");
  if (!accessToken) {
    setProfileData(null);
    return <Navigate to="/" />;
  } else {
    if (accessToken) {
      const {  error, data } = useQuery(GetUserInformation, {
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      });
      
      if (data) {
        setProfileData(data?.getUserByToken);
      }
      if (error) {
        console.log(error);
        setProfileData(null);
        Cookies.remove("accessToken");
        return <Navigate to="/" />;
      }
    }
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
