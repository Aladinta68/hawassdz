import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import { ProfileHeader } from "./components/header";
import { ProfileForm } from "./components/form";

export const UserProfile = () => {

  return (
    <Container maxW={"8xl"}>
      <VStack my={{ base: "100px", md: 50 }} w={"full"}>
        <ProfileHeader />
        <ProfileForm />
      </VStack>
    </Container>
  );
};
