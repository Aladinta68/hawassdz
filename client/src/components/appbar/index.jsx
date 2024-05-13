import { Flex } from "@chakra-ui/react";
import React from "react";
import { DesktopAppbar } from "./desktop";
import { MobileAppbar } from "./mobile";
import useProfileStore from "./../../store/profile";

export const Appbar = () => {
  const links = [
    { name: "الرئيسيه", url: "/" },
    {
      name: "المناطق السياحيه",
      url: "/destinations",
      detailUrl: "/destination_details",
    },
    { name: "الفنادق", url: "/hotels", detailUrl: "/hotel_details" },
    { name: "المطاعم", url: "/restaurants", detailUrl: "/restaurant_details" },
    { name: "الفعاليات والرحلات ", url: "/trips", detailUrl: "/trip_details" },
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
