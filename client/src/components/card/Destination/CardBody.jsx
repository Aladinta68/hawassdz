import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Icon,
  Spacer,
  Stack,
  Text,
  Textarea,
  VStack,
  useBreakpoint,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
export const DestinationCardBody = ({ renderButton, isHorizontal, data }) => {
  return (
    <VStack
      align={isHorizontal && "flex-start"}
      h={isHorizontal && "100%"}
      w={"100%"}
    >
      <Text
        h={"12"}
        w={"100%"}
        lineHeight={"normal"}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
      >
        {data?.description}
      </Text>
      {isHorizontal && <Spacer />}
      {renderButton() && (
        <Stack pt={{ base: 2, md: 0 }} align={"end"} w={"100%"}>
          <Button
            variant={"unstyled"}
            _hover={{ opacity: 0.8 }}
            color={"#ffffff"}
            bg={"#608aff"}
            w={{ base: "100%", md: "120px" }}
          >
            <HStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>
              <Text fontWeight={{ base: "600", md: "500" }}>عرض </Text>
              <ViewIcon />
            </HStack>
          </Button>
        </Stack>
      )}
    </VStack>
  );
};
