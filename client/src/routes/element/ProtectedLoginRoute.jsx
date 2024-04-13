import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function ProtectedLoginRoute() {
  const accessToken = Cookies.get("accessToken");
  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <Box bg={useColorModeValue("#ffffff","#000000")}>
      <Outlet />
    </Box>
  );
}
