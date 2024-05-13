import {
  Avatar,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Rating } from "../../../../../components/rating";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

export const Rate = ({ item, userData }) => {
  return (
    <HStack
      h={"full"}
      p={2}
      borderRadius={5}
      transition={"ease-in-out 0.3s"}
      _hover={{ backgroundColor: useColorModeValue("#f9f9f9", "#141414") }}
      w={"100%"}
    >
      <Avatar
        src={
          item &&
          item.user &&
          item.user.image &&
          `http://localhost:3000/${item.user.image.url}`
        }
        bg={"#3747f9"}
        size={"sm"}
        mt={1}
        mr={2}
      />
      <VStack gap={0} w={"100%"} align={"flex-start"}>
        <Text fontSize={18} fontWeight={600}>
          {item?.user?.firstName}
          <Text as={"span"} ml={2}>
            {item?.user?.lastName}
          </Text>
        </Text>
        <HStack>
          <Rating initialRating={item.stars} isReadOnly={true} />
          <Text color={"#7b7b7b"}>
            {new Date(parseInt(item?.updatedAt)).toLocaleTimeString()}
            <Text ml={2} as={"span"}>
              {new Date(parseInt(item?.updatedAt)).toLocaleDateString()}
            </Text>
          </Text>
        </HStack>
        <Text fontSize={16} fontWeight={"500"}>
          {item.feedback}
        </Text>
      </VStack>
      <Spacer />
      {item?.user?.id === userData?.getUserByToken?.id && (
        <HStack  spacing={5} align={"center"} justify={"center"} h={"100%"}>
          <IconButton
            cursor={"pointer"}
            variant={"ghost"}
            size={"xs"}
            as={MdModeEditOutline}
          />
          <IconButton
            color={"red.500"}
            variant={"ghost"}
            size={"xs"}
            cursor={"pointer"}
            as={MdDelete}
          />
        </HStack>
      )}
    </HStack>
  );
};
