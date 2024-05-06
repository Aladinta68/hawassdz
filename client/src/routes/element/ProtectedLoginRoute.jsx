import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { Box, useColorModeValue } from "@chakra-ui/react";
import useProfileStore from "./../../store/profile";
import { useQuery } from "@apollo/client";
import { GetUserInformation } from "./../../api/user/query";

export default function ProtectedLoginRoute() {
  const accessToken = Cookies.get("accessToken");
  if (accessToken) {
      const { error, data } = useQuery(GetUserInformation, {
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      });
      if (data) {
        return <Navigate to="/" />;
      }
      if (error) {
        Cookies.remove("accessToken");
        console.log(error);
      }
  }

  return (
    <Box bg={useColorModeValue("#ffffff", "#141414")}>
      <Outlet />
    </Box>
  );
}
