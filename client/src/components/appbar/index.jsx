import { Flex } from "@chakra-ui/react";
import React from "react";
import { DesktopAppbar } from "./desktop";
import { MobileAppbar } from "./mobile";
import Cookies from "js-cookie";

export const Appbar = () => {
  const links = [
    { name: "الرئيسيه", url: "/" },
    { name: "الولايات", url: "/dz" },
    { name: "المناطق السياحيه", url: "/destinations" },
    { name: "الفنادق", url: "/hotels" },
    { name: "المطاعم", url: "/restaurants" },
    { name: "الفعاليات والرحلات ", url: "/trips" },
  ];
  const accessToken = Cookies.get("accessToken");
  const isLogin = accessToken && true;
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <DesktopAppbar isLogin={isLogin} links={links} />
      <MobileAppbar isLogin={isLogin} links={links} />
    </Flex>
  );
};
