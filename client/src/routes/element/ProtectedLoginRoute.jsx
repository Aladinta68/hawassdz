import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { GetUserInformation } from "./../../api/user/query";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useQuery } from "@apollo/client";

export default function ProtectedLoginRoute() {
  const accessToken = Cookies.get("accessToken");
  const { loading, error, data } = useQuery(GetUserInformation, {
    context: {
      headers: {
        Authorization: accessToken,
      },
    },
    skip: !accessToken,
  });
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    Cookies.remove("accessToken");
    console.error(error);
  }

  if (data) {
    return <Navigate to="/" />;
  }

  return (
    <Box bg={useColorModeValue("#ffffff", "#141414")}>
      <Outlet />
    </Box>
  );
}
