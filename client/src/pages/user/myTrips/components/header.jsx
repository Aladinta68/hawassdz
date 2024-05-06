import {
  Alert,
  AlertIcon,
  Button,
  Heading,
  Image,
  Spacer,
  Stack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import headerimg from "../../../../assets/profile/headerMauve.png";
import { AddIcon } from "@chakra-ui/icons";
import useProfileStore from "../../../../store/profile";
import { Link as RouterLink } from "react-router-dom";

export const MyTripsHeader = () => {
  const ProfileData = useProfileStore((state) => state.ProfileData);

  return (
    <VStack
      pos={"relative"}
      justify={"flex-end"}
      align={"center"}
      borderRadius={20}
      h={{ base: 250, md: 250 }}
      w={"100%"}
    >
      <Image
        pos={"relative"}
        borderRadius={20}
        src={headerimg}
        w={"full"}
        h={"80%"}
      />
      <Stack
        justify={"flex-start"}
        align={"center"}
        pos={"absolute"}
        w={"full"}
        h={"80%"}
      >
        {" "}
        <Heading color={"#ffffff"}>رحلاتي</Heading>
      </Stack>
      <Spacer pos={"relative"} />
      <Stack
        pt={{ base: 5, md: 0 }}
        direction={{ md: "row", base: "column" }}
        spacing={{base:2,md:8}}
        align={"center"}
        justify={{ base: "center", md: "flex-start" }}
        px={5}
        pos={"absolute"}
        borderRadius={20}
        w={"90%"}
        h={{ base: 150, md: 110 }}
        bg={useColorModeValue(
          "rgba(255, 255, 255, 0.8)",
          "rgba(36, 36, 36, 0.8)"
        )}
        backdropFilter={"saturate(200%) blur(50px)"}
        boxShadow={"rgba(0, 0, 0, 0.02) 0px 2px 5.5px"}
      >
        <Button
          isDisabled={!ProfileData?.complete}
          rightIcon={<AddIcon />}
          colorScheme="blue"
          variant="solid"
          as={RouterLink}
          to={ProfileData?.complete&&'/add_trip'}
        >
          انشاء رحلة
        </Button>{" "}
        {!ProfileData?.complete && (
          <Alert w={"fit-content"} status="error">
            <AlertIcon />
            حسابك غير مكتمل، يرجى إكمال حسابك لتتمكن من إنشاء رحلات{" "}
          </Alert>
        )}
      </Stack>
    </VStack>
  );
};
