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

export const Header = () => {
  return (
    <VStack align={"flex-start"} w={"100%"}>
      <HStack pb={2} w={"100%"}>
        <HStack>
          <Heading>Voyage Biskra</Heading>
          <Text>
            4500 <Text as={"span"}>DA</Text>
          </Text>
          <Text>/ Per Person</Text>
        </HStack>
        <Spacer />
        <HStack>
          <IconButton cursor={'pointer'}  h={7} variant={'unstyled'} as={TbShare2} />
        </HStack>
      </HStack>
      <HStack>
        <Rating isReadOnly={true} initialRating={3} />
        <Text>(2.3k review)</Text>
      </HStack>
    </VStack>
  );
};
