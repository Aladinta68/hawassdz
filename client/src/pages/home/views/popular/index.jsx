import { Box, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../components/card";
import { IoArrowBack } from "react-icons/io5";

export const Popular = ({ title, description }) => {
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
      <Flex
        py={5}
        w={"100%"}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Text textAlign={{base:'center',md:"start"}}  w={{base:"100%",md:'15%'}} color={'#0C111F'} fontSize={22} fontWeight={600} >{title}</Text>
        <Text w={{base:"100%",md:'40%'}} fontWeight={500} color={'#0c111faa'} my={{ base: "8", md: 0 }} textAlign={"center"}>
          {description}
        </Text>
        <Flex justifyContent={'space-between'}  w={{base:'30%',md:"8%"}} mb={5}>
          <IconButton
            display={"flex"}
            fontSize={22}
            color={"##0C111F"}
            borderRadius={"full"}
            border={"4px solid #F5F5F5"}
            variant={"unstyled"}
            icon={<IoArrowBack />}
          />
          <IconButton
            style={{ transform: "rotate(180deg)" }}
            display={"flex"}
            fontSize={22}
            color={"#ffffff"}
            bgColor={"#0C111F"}
            borderRadius={"full"}
            border={"4px solid #F5F5F5"}
            variant={"unstyled"}
            icon={<IoArrowBack />}
          />
        </Flex>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
      >
        <Box w={"30%"}>
          <CustomCard />
        </Box>
        <Box w={"30%"}>
          <CustomCard />
        </Box>
        <Box w={"30%"}>
          <CustomCard />
        </Box>
      </Flex>
    </Flex>
  );
};
