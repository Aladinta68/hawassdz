import {
  HStack,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { TbShare2 } from "react-icons/tb";
import { PiSealCheckFill } from "react-icons/pi";
import { Rating } from "./../../../../components/rating/index";

export const DetailsHeader = ({ data }) => {
  return (
    <VStack align={"flex-start"} w={"full"}>
      <HStack pb={2} w={"100%"}>
        <HStack>
          <Heading>{data?.name}</Heading>
        </HStack>
        <Spacer />
        <HStack>
          <IconButton
            cursor={"pointer"}
            h={7}
            variant={"unstyled"}
            as={TbShare2}
          />
        </HStack>
      </HStack>
      <HStack align={"center"}>
        <Rating isReadOnly={true} initialRating={data?.overallRating} />
        <Text>({data?.ratings.length} review)</Text>
        <Text>Recommended </Text>
        <PiSealCheckFill size={17} color="#f24864" />
      </HStack>
    </VStack>
  );
};
