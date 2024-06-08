import { HStack, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";

export const ProgressBars = ({ data }) => {
  let Rating5 = [];
  let Rating4 = [];
  let Rating3 = [];
  let Rating2 = [];
  let Rating1 = [];
  data?.ratings.forEach((rating) => {
    const stars = rating.stars;
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
  const percentageRating1 = data?.ratings>0?(Rating1.length / totalRatings) * 100:0;
  const percentageRating2 = data?.ratings>0?(Rating2.length / totalRatings) * 100:0;
  const percentageRating3 = data?.ratings>0?(Rating3.length / totalRatings) * 100:0;
  const percentageRating4 = data?.ratings>0?(Rating4.length / totalRatings) * 100:0;
  const percentageRating5 = data?.ratings>0?(Rating5.length / totalRatings) * 100:0;
  return (
    <HStack w={"100%"} my={10}>
      <Text fontSize={50} fontWeight={600}>
        {data?.overallRating ? data.overallRating.toFixed(1) : 0}
      </Text>
      <FaStar color="#FFBA0A" size={20} />
      <VStack align={"flex-end"} w={"100%"}>
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
      </VStack>
    </HStack>
  );
};
