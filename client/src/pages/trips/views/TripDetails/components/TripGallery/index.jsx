import React, { useState } from "react";
import { Box, Flex, Image, VStack, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import trip1 from "../../../../../../assets/image/trips/data/trip1.png";
import trip2 from "../../../../../../assets/image/trips/data/trip2.png";
import trip3 from "../../../../../../assets/image/trips/data/trip3.png";

const images = [trip1, trip2, trip3, trip2, trip1, trip3, trip1, trip3];
export const TripGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <Flex
      justify={"space-between"}
      direction={{ base: "column", md: "row" }}
      w={"100%"}
    >
      <Box
        css={{
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#FA8B02",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#efefef",
            borderRadius: "4px",
          },
        }}
        w={{ md: "18%", base: "100%" }}
        px={{ base: 0, md: 2 }}
        my={{ base: 5, md: 0 }}
        py={{ base: 2, md: 0 }}
        maxH={{ md: "800px", base: "200px" }}
        overflowY={"auto"}
        overflowX={"auto"}
      >
        <Flex
          direction={{ md: "column", base: "row" }}
          spacing="2"
          align="stretch"
        >
          {images.map((image, index) => (
            <Image
              mx={{ base: 1, md: 0 }}
              my={{ base: 0, md: 1 }}
              key={index}
              src={image}
              onClick={() => setSelectedImageIndex(index)}
              cursor="pointer"
              maxH="150px"
              w={"auto"}
              opacity={index === selectedImageIndex ? "1" : "0.6"}
            />
          ))}
        </Flex>
      </Box>
      <Box w={{ md: "80%", base: "100%" }}>
        <Flex
          pos={"relative"}
          w={"100%"}
          h={"100%"}
          align="center"
          justify="center"
        >
          <Flex
            px={5}
            w={"100%"}
            justify={"space-between"}
            direction={"row"}
            pos={"absolute"}
          >
            <IconButton
              bg={"#ffffffc6"}
              onClick={handlePrevImage}
              rounded={"full"}
              fontSize={25}
              aria-label="Next image"
              icon={<ChevronLeftIcon />}
            />
            <IconButton
              bg={"#ffffffc6"}
              onClick={handleNextImage}
              rounded={"full"}
              fontSize={25}
              aria-label="Previous image"
              icon={<ChevronRightIcon />}
            />
          </Flex>
          <Image
            h={{ md: "800px", base: "400px" }}
            w={"100%"}
            src={images[selectedImageIndex]}
            maxW="100%"
          />
        </Flex>
      </Box>
    </Flex>
  );
};
