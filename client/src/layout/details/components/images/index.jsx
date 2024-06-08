import {
  Button,
  Grid,
  GridItem,
  Image,
  Stack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export const DetailsImages = ({ data }) => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const images = data.map((item) => ({
    original: item.url,
    thumbnail: item.url,
  }));

  return (
    <>
      {" "}
      <Grid
        w={{ base: "100%", md: "80%" }}
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={1}
      >
        {breakpoint === "base" ? (
          <GridItem rowSpan={2} colSpan={2} w="100%" h={"250px"}>
            <Stack pos={"relative"} h={"full"} w={"full"}>
              <Image
                cursor={"pointer"}
                onClick={() => onOpen()}
                src={data[0]?.url}
                pos={"relative"}
                w={"full"}
                h={"full"}
              />
              <Button
                onClick={() => onOpen()}
                _hover={{
                  backgroundColor: "#2d2d2d",
                }}
                transition={"ease-in-out 0.3s"}
                m={2}
                bottom={0}
                left={0}
                pos={"absolute"}
                w={"min-content"}
                fontWeight={400}
                px={5}
                borderRadius={25}
                color={"#ffffff"}
                bg={"black"}
                variant={"unstyled"}
              >
                رؤية جميع الصور
              </Button>
            </Stack>
          </GridItem>
        ) : (
          <>
            {data.length === 1 &&
              data
                .slice(0, 3)
                .map((item, index) => (
                  <GridItem colSpan={2} key={index} w="100%" h={"500px"} />
                ))}
            {data.length === 2 &&
              data.map((item, index) => (
                <GridItem rowSpan={2} key={index} w="100%" h={"400px"}>
                  <Image
                    cursor={"pointer"}
                    onClick={() => onOpen()}
                    src={`${item?.url}`}
                    pos={"relative"}
                    w={"full"}
                    h={"full"}
                  />
                </GridItem>
              ))}
            {data.length === 3 &&
              data.map((item, index) => (
                <GridItem
                  border={useColorModeValue(
                    "1px solid #000000",
                    "4px solid #FFFFFF"
                  )}
                  key={index}
                  w="100%"
                  h={index === 0 ? "500px" : "248px"}
                  rowSpan={index === 0 ? 2 : 1}
                >
                  <Image
                    cursor={"pointer"}
                    onClick={() => onOpen()}
                    src={`${item?.url}`}
                    pos={"relative"}
                    w={"full"}
                    h={"full"}
                  />
                </GridItem>
              ))}
            {data.length > 3 &&
              data.slice(0, 3).map((item, index) => (
                <GridItem
                  key={index}
                  w="100%"
                  h={index === 0 ? "500px" : "250px"}
                  rowSpan={index === 0 ? 2 : 1}
                >
                  <Stack pos={"relative"} h={"full"} w={"full"}>
                    <Image
                      cursor={"pointer"}
                      onClick={() => onOpen()}
                      src={item?.url}
                      pos={"relative"}
                      w={"full"}
                      h={"full"}
                    />{" "}
                    {index === 2 && (
                      <Button
                        _hover={{
                          backgroundColor: "#2d2d2d",
                        }}
                        transition={"ease-in-out 0.3s"}
                        m={2}
                        bottom={0}
                        left={0}
                        pos={"absolute"}
                        w={"min-content"}
                        fontWeight={400}
                        px={5}
                        borderRadius={25}
                        color={"#ffffff"}
                        bg={"black"}
                        variant={"unstyled"}
                      >
                        رؤية جميع الصور
                      </Button>
                    )}
                  </Stack>
                </GridItem>
              ))}
          </>
        )}{" "}
      </Grid>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          h={"100vh"}
          w={'full'}
          m={0}
          p={"0 !important"}
        >
          <ModalCloseButton />
          <ModalBody p={"0 !important"}>
            <Stack
              w={"full"}
              justify={"center"}
              align={"center"}
            >
              <ImageGallery
                items={images}
                showThumbnails={true}
                showFullscreenButton={true}
                showPlayButton={true}
                showNav={true}
                lazyLoad={true}
                slideDuration={450}
                slideInterval={3000}
                thumbnailPosition="bottom"
                useBrowserFullscreen={true}
              />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
