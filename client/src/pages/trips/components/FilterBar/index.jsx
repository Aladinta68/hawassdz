import { Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react";

export const FilterBar = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleChange = (newValue) => {
    setPriceRange(newValue);
  };
  return (
    <Flex p={5} bg={"#EDEDED"}>
      <VStack spacing={5} w={"100%"}>
        <Heading color={"#181E4B"} fontWeight={600} fontSize={30}>
          Plan Your Trip
        </Heading>
        <Text fontSize={14} textAlign={"center"}>
          Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
          aut ?
        </Text>
        <VStack w={"100%"}>
          <Input
            border={"none"}
            _placeholder={{ color: "#00000070" }}
            py={6}
            borderRadius={"0"}
            bg={"#ffffff"}
            type="text"
            placeholder="Search Trip"
          />
          <Input
            border={"none"}
            _placeholder={{ color: "#00000070" }}
            py={6}
            borderRadius={"0"}
            bg={"#ffffff"}
            type="text"
            placeholder="Where To?"
          />
          <Input
            border={"none"}
            _placeholder={{ color: "#00000070" }}
            py={6}
            borderRadius={"0"}
            bg={"#ffffff"}
            type="number"
            placeholder="Person"
          />
          <Input
            border={"none"}
            _placeholder={{ color: "#00000070" }}
            py={6}
            borderRadius={"0"}
            bg={"#ffffff"}
            type="date"
            placeholder="Date"
          />
        </VStack>
        <VStack align={"flex-start"} w={"100%"}>
          <Text
            color={"#343434"}
            fontWeight={500}
            fontSize={16}
            textAlign={"start"}
          >
            Filter by price
          </Text>
          <Slider
            defaultValue={priceRange}
            min={0}
            max={100}
            onChange={handleChange}
          >
            <SliderTrack bg={"#ffffff"} h={"30px"}>
              <SliderFilledTrack bg={"#f67156"} />
            </SliderTrack>
            <SliderThumb
              m={0}
              borderRadius={0}
              bg={"#df5b40"}
              boxSize={6}
            ></SliderThumb>
          </Slider>
        </VStack>
        <Button
          boxShadow={"md"}
          variant={"unstyled"}
          bg={"#DF6951"}
          px={10}
          fontWeight={400}
          _hover={{ opacity: 0.9 }}
          color={"#ffffff"}
        >
          Search
        </Button>
      </VStack>
    </Flex>
  );
};
