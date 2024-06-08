import {
  Avatar,
  Badge,
  Box,
  Icon,
  Image,
  Input,
  Spacer,
  Spinner,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import headerimg from "../../../../assets/profile/header.png";
import { useMutation, useQuery } from "@apollo/client";
import { UploadProfileImage } from "./../../../../api/user/mutation";
import Cookies from "js-cookie";
import { GetUserInformation } from "./../../../../api/user/query";
import { FaPen } from "react-icons/fa";

export const ProfileHeader = () => {
  const accessToken = Cookies.get("accessToken");
  const toast = useToast();

  let ProfileData;
  const { error: errorQuery, data: userData } = useQuery(GetUserInformation, {
    context: {
      headers: {
        Authorization: accessToken,
      },
    },
    skip: !accessToken,
  });
  if (errorQuery) {
    console.error(error);
    Cookies.remove("accessToken");
  }
  if (userData) {
    ProfileData = userData?.getUserByToken;
  }

  const [uploadUserImage, { loading }] = useMutation(UploadProfileImage, {
    refetchQueries: [
      {
        query: GetUserInformation,
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      },
    ],
    awaitRefetchQueries: true, // Ensure refetch completes before resolving mutation
  });
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    try {
      const result = await uploadUserImage({
        variables: { userId: ProfileData.id, file: file },
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      });
      if (result) {
        toast({
          title: "",
          description: "تم تحميل الصورة بنجاح",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const imageUrl = ProfileData?.image?.url;
  return (
    <VStack
      pos={"relative"}
      justify={"flex-end"}
      align={"center"}
      borderRadius={20}
      h={{ base: 300, md: 250 }}
      w={"100%"}
    >
      <Image
        pos={"relative"}
        borderRadius={20}
        src={headerimg}
        w={"full"}
        h={"80%"}
      />
      <Spacer pos={"relative"} />
      <Stack
        pt={{ base: 5, md: 0 }}
        direction={{ md: "row", base: "column" }}
        spacing={8}
        align={"center"}
        justify={"flex-start"}
        px={5}
        pos={"absolute"}
        borderRadius={20}
        w={"90%"}
        h={{ base: 220, md: 110 }}
        bg={useColorModeValue(
          "rgba(255, 255, 255, 0.8)",
          "rgba(36, 36, 36, 0.8)"
        )}
        backdropFilter={"saturate(200%) blur(50px)"}
        boxShadow={"rgba(0, 0, 0, 0.02) 0px 2px 5.5px"}
      >
        <Stack
          pos={"relative"}
          cursor={"pointer"}
          align={"center"}
          borderRadius={20}
        >
          {loading ? (
            <Spinner m={4} />
          ) : (
            <>
              <label htmlFor="file-upload">
                <Input
                  accept="image/*"
                  onChange={handleFileSelect}
                  type={"file"}
                  id={"file-upload"}
                  display={"none"}
                />
                <Image
                  cursor={"pointer"}
                  src={imageUrl}
                  as={imageUrl ? "img" : Avatar}
                  h={70}
                  w={70}
                  borderRadius={"20"}
                />
              </label>
              <Icon top={0} right={0} pos={"absolute"} as={FaPen} />
            </>
          )}
        </Stack>
        <Stack
          direction={{ md: "row", base: "column" }}
          spacing={{ base: 5, md: 10 }}
          align={{ base: "center", md: "flex-end" }}
          h={50}
        >
          <VStack
            h={"full"}
            spacing={0}
            align={{ base: "center", md: "flex-end" }}
          >
            <Text fontSize={20} fontWeight={600}>
              {ProfileData?.firstName + " " + ProfileData?.lastName}
            </Text>
            <Text fontWeight={400}>{ProfileData?.email}</Text>
          </VStack>
          <Badge
            fontSize={13}
            colorScheme={ProfileData?.complete ? "green" : "orange"}
          >
            {!ProfileData?.complete && <Text> حسابك غير مكتمل !</Text>}
          </Badge>
        </Stack>
      </Stack>
    </VStack>
  );
};
