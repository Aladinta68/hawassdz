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
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Rating } from "../../../../components/rating";

export const DetailsRating = ({ data }) => {
  let Rating5 = [];
  let Rating4 = [];
  let Rating3 = [];
  let Rating2 = [];
  let Rating1 = [];
  data.ratings.forEach((rating) => {
    const stars = rating.stars;
    const feedback = rating.feedback;
    if (stars === 5) {
      Rating5.push(stars);
    } else if (stars >= 4 && stars < 5) {
      Rating4.push(stars);
    } else if (stars >= 3 && stars < 4) {
      Rating3.push(stars);
    } else if (stars >= 2 && stars < 3) {
      Rating2.push(stars);
    } else if (stars >= 1 && stars < 2) {
      Rating1.push(stars);
    }
  });
  const totalRatings = data?.ratings.length;
  const percentageRating1 = (Rating1.length / totalRatings) * 100;
  const percentageRating2 = (Rating2.length / totalRatings) * 100;
  const percentageRating3 = (Rating3.length / totalRatings) * 100;
  const percentageRating4 = (Rating4.length / totalRatings) * 100;
  const percentageRating5 = (Rating5.length / totalRatings) * 100;

  return (
    <VStack my={20} w={{ base: "100%", md: "80%" }} align={"flex-start"}>
      <Heading>التقييمات</Heading>
      <HStack w={"100%"} my={10}>
        <Text fontSize={50} fontWeight={600}>
          {data?.overallRating ? data.overallRating.toFixed(1) : 0}
        </Text>
        <FaStar color="#FFBA0A" size={20} />
        <VStack align={"flex-end"} w={"100%"}>
          {Rating1 && Rating1.length > 0 && (
            <HStack justify={"flex-start"} align={"center"} w={"80%"}>
              <Text w={3}>1</Text>
              <Progress
                cursor={"pointer"}
                borderRadius={20}
                size="sm"
                value={percentageRating1}
                w={"100%"}
              />
            </HStack>
          )}
          {Rating2 && Rating2.length > 0 && (
            <HStack justify={"flex-start"} align={"center"} w={"80%"}>
              <Text w={3}>2</Text>
              <Progress
                cursor={"pointer"}
                borderRadius={20}
                size="sm"
                value={percentageRating2}
                w={"100%"}
              />
            </HStack>
          )}
          {Rating3 && Rating3.length > 0 && (
            <HStack justify={"flex-start"} align={"center"} w={"80%"}>
              <Text w={3}>3</Text>
              <Progress
                cursor={"pointer"}
                borderRadius={20}
                size="sm"
                value={percentageRating3}
                w={"100%"}
              />
            </HStack>
          )}
          {Rating4 && Rating4.length > 0 && (
            <HStack justify={"flex-start"} align={"center"} w={"80%"}>
              <Text w={3}>4</Text>
              <Progress
                cursor={"pointer"}
                borderRadius={20}
                size="sm"
                value={percentageRating4}
                w={"100%"}
              />
            </HStack>
          )}
          {Rating5 && Rating5.length > 0 && (
            <HStack justify={"flex-start"} align={"center"} w={"80%"}>
              <Text w={3}>5</Text>
              <Progress
                cursor={"pointer"}
                borderRadius={20}
                size="sm"
                value={percentageRating5}
                w={"100%"}
              />
            </HStack>
          )}
        </VStack>
      </HStack>
      <HStack w={"100%"}>
        <Text fontWeight={600}>جميع التقييمات (2)</Text>
        <Spacer />
        <Popover>
          <PopoverTrigger>
            <Button variant={"ghost"} color={"#4f68f9"}>
              + إضافة تقييم{" "}
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
        _hover={{ backgroundColor: useColorModeValue("#f0eded", "#141414") }}
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
        _hover={{ backgroundColor: useColorModeValue("#f0eded", "#141414") }}
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
