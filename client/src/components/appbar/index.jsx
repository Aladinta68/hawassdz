import { Flex } from "@chakra-ui/react";
import React from "react";
import { DesktopAppbar } from "./desktop";
import { MobileAppbar } from "./mobile";
import { GetUserInformation } from "../../api/user/query";
import { useQuery } from "@apollo/client";
import  Cookies  from 'js-cookie';

export const Appbar = () => {
  const accessToken = Cookies.get("accessToken");

  let ProfileData;
  const { loading, error, data } = useQuery(GetUserInformation, {
    context: {
      headers: {
        Authorization: accessToken,
      },
    },
    skip: !accessToken,
  });
  if (error) {
    console.error(error);
    Cookies.remove("accessToken");
  }
  if (data) {
    ProfileData = data?.getUserByToken;
  }

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

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <DesktopAppbar ProfileData={ProfileData} isLogin={ProfileData} links={links} />
      <MobileAppbar ProfileData={ProfileData} isLogin={ProfileData} links={links} />
    </Flex>
  );
};
