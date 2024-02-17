import {
  Progress,
  VStack,
  Heading,
  HStack,
  Text,
  Spacer,
  Button,
  Checkbox,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Portal,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Rating } from "../../../../../../../components/rating/index";

export const Reviews = () => {
  return (
    <VStack my={20} w={"100%"} align={"flex-start"}>
      <Heading>Notice</Heading>
      <HStack w={"100%"} my={10}>
        <Text fontSize={50} fontWeight={600}>
          3.0
        </Text>
        <FaStar color="#FFBA0A" size={20} />
        <VStack align={"flex-end"} w={"100%"}>
          <HStack justify={"flex-start"} align={"center"} w={"80%"}>
            <Text w={3}>5</Text>
            <Progress
              cursor={"pointer"}
              borderRadius={20}
              size="sm"
              value={0}
              w={"100%"}
            />
          </HStack>
          <HStack justify={"flex-start"} align={"center"} w={"80%"}>
            <Text w={3}>4</Text>
            <Progress
              cursor={"pointer"}
              borderRadius={20}
              size="sm"
              value={50}
              w={"100%"}
            />
          </HStack>
          <HStack justify={"flex-start"} align={"center"} w={"80%"}>
            <Text w={3}>3</Text>

            <Progress
              cursor={"pointer"}
              borderRadius={20}
              size="sm"
              value={20}
              w={"100%"}
            />
          </HStack>
          <HStack justify={"flex-start"} align={"center"} w={"80%"}>
            <Text w={3}>2</Text>

            <Progress
              cursor={"pointer"}
              borderRadius={20}
              size="sm"
              value={80}
              w={"100%"}
            />
          </HStack>
          <HStack justify={"flex-start"} align={"center"} w={"80%"}>
            <Text w={3}>1</Text>
            <Progress
              cursor={"pointer"}
              borderRadius={20}
              size="sm"
              value={50}
              w={"100%"}
            />
          </HStack>
        </VStack>
      </HStack>
      <HStack w={"100%"}>
        <Text fontWeight={600}>All Reviews (2)</Text>
        <Spacer />
        <Popover>
          <PopoverTrigger>
            <Button variant={"ghost"} color={"#4f68f9"}>
              + Add Review
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>
              {" "}
              <HStack>
                <BsBookmarkStarFill color="#4f68f9" />
                <Text fontSize={16} fontWeight={500}>
                  Reviews
                </Text>
              </HStack>
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <VStack w={"100%"} align={"flex-start"}>
                <Rating />
                <Textarea h={120} my={2} border={"2px solid #f0efef"} />
                <Checkbox>Anonymous</Checkbox>
              </VStack>
            </PopoverBody>
            <PopoverFooter>
              {" "}
              <Button
                w={"100%"}
                color={"#ffffff"}
                bg={"#378bf9"}
                variant={"unstyled"}
              >
                Confirm
              </Button>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </HStack>
      <HStack
        p={2}
        borderRadius={5}
        transition={"ease-in-out 0.3s"}
        _hover={{ backgroundColor: "#f0eded" }}
        w={"100%"}
        align={"flex-start"}
      >
        <Avatar size={"sm"} mt={1} mr={2} />
        <VStack gap={0} w={"100%"} align={"flex-start"}>
          <Text fontSize={18} fontWeight={600}>
            Anonymous User
          </Text>
          <HStack>
            <Rating isReadOnly={true} />
            <Text color={"#7b7b7b"}>11/28/2023 08:42:00 AM</Text>
          </HStack>
          <Text fontSize={16} fontWeight={"500"}>
            excelent
          </Text>
        </VStack>
      </HStack>
      <HStack
        p={2}
        borderRadius={5}
        transition={"ease-in-out 0.3s"}
        _hover={{ backgroundColor: "#f0eded" }}
        w={"100%"}
        align={"flex-start"}
      >
        <Avatar name="Alae" bg={"#3747f9"} size={"sm"} mt={1} mr={2} />
        <VStack gap={0} w={"100%"} align={"flex-start"}>
          <Text fontSize={18} fontWeight={600}>
            Ala eddine Tahar abbes
          </Text>
          <HStack>
            <Rating isReadOnly={true} />
            <Text color={"#7b7b7b"}>11/28/2023 08:42:00 AM</Text>
          </HStack>
          <Text fontSize={16} fontWeight={"500"}>
            nice
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
