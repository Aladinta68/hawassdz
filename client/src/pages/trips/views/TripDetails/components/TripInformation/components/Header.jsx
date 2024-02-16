import React from "react";
import {
  HStack,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Rating } from "../../../../../../../components/rating";
import { TbShare2 } from "react-icons/tb";
import { PiSealCheckFill } from "react-icons/pi";

export const Header = () => {
  return (
    <VStack align={"flex-start"} w={"100%"}>
      <HStack pb={2} w={"100%"}>
        <HStack>
          <Heading>Voyage Biskra</Heading>
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
      <HStack align={'center'}>
        <Rating isReadOnly={true} initialRating={3} />
        <Text>(2.3k review)</Text>
        <Text>Recommended  </Text>
        <PiSealCheckFill size={17} color="#f24864" />
      </HStack>
    </VStack>
  );
};
