import { VStack, Heading, HStack, Text, Spacer, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useQuery } from "@apollo/client";
import { GetUserInformation } from "./../../../../api/user/query";
import { Rate } from "./components/Rate";
import { Add } from "./components/Add";
import { ProgressBars } from "./components/Progress";
import { Paggination } from "./../../../../components/Paggination/index";

export const DetailsRating = ({ type, data }) => {
  const [SelectedPage, setSelectedPage] = useState(1);
  let isLogged = false;
  const accessToken = Cookies.get("accessToken");
  let userData;
  if (!accessToken) {
    isLogged = false;
  } else {
    if (accessToken) {
      const { error, data: user } = useQuery(GetUserInformation, {
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      });
      if (user) {
        userData = user;
        isLogged = true;
      }
      if (error) {
        isLogged = false;
        Cookies.remove("accessToken");
      }
    }
  }
  const itemsPerPage = 4;
  const startIndex = (SelectedPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <VStack my={20} w={{ base: "100%", md: "80%" }} align={"flex-start"}>
      <Heading>التقييمات</Heading>
      <ProgressBars data={data} />
      <HStack w={"100%"}>
        <Text fontWeight={600}>جميع التقييمات ({data.ratings.length})</Text>
        <Spacer />
        {isLogged && <Add type={type} userData={userData} />}
      </HStack>
      {data.ratings.slice(startIndex, endIndex).map((item, index) => (
        <Rate key={index} item={item} userData={userData} />
      ))}
      {data && data.ratings && data.ratings.length > 0 && (
        <Stack w={"full"} align={"center"} justify={"center"} py={5}>
          <Paggination
            setSelectedPage={setSelectedPage}
            MaxPage={Math.ceil(data.ratings.length / itemsPerPage)}
            currentPage={SelectedPage}
            maxPage={Math.ceil(data.ratings.length / itemsPerPage)}
          />
        </Stack>
      )}
    </VStack>
  );
};
