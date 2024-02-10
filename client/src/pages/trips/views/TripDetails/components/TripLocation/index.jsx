import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Map from "../../../../../../assets/image/trips/Map.png";
export const TripLocation = () => {
  return (
    <Flex direction={"column"} w={"100%"}>
      <Heading>Trip location</Heading>
      <Text my={5}>
        Qui tempore voluptate qui quia commodi rem praesentium alias et
        voluptates officia sed molestiae sint et voluptas quos. Qui harum
        repudiandae galisum dolorem Hic deleniti officiis est sapiente explicabo
        non eaque corporis aut voluptatum iusto At facere enim id voluptas
        reprehenderit. Ut voluptas laudantium
      </Text>
      <Box my={10} w={"100%"} >
        <Image src={Map} />
      </Box>
    </Flex>
  );
};
