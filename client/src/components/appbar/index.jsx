import { Flex } from "@chakra-ui/react";
import React from "react";
import { DesktopAppbar } from "./desktop";
import { MobileAppbar } from "./mobile";
import useProfileStore from "./../../store/profile";

export const Appbar = () => {
  const links = [
    { name: "الرئيسيه", url: "/" },
    { name: "المناطق السياحيه", url: "/destinations" },
    { name: "الفنادق", url: "/hotels" },
    { name: "المطاعم", url: "/restaurants" },
    { name: "الفعاليات والرحلات ", url: "/trips" },
  ];
  const ProfileData = useProfileStore((state) => state.ProfileData);
  const isLogin = ProfileData && true;
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <DesktopAppbar isLogin={isLogin} links={links} />
      <MobileAppbar isLogin={isLogin} links={links} />
    </Flex>
  );
};
