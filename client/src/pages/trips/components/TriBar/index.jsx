import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import { PiPencilSimpleLine } from "react-icons/pi";
import { HiMiniArrowDownTray } from "react-icons/hi2";
export const TriBar = () => {
  const [TriRate, setTriRate] = useState(false);
  const [TriAlphab, setTriAlphab] = useState(false);
  const [TriPrice, setTriPrice] = useState(false);
  const [TriPrice2, setTriPrice2] = useState(false);

  return (
    <Flex
      w={{md:"4xl",base:"90%"}}
      h={"80px"}
      position="absolute"
      top="72vh"
      zIndex="2"
      bg={"#F8F8F8"}
    >
      <Button
        onClick={() => setTriPrice2(!TriPrice2)}
        w={"25%"}
        h={"100%"}
        variant={"unstyled"}
      >
        <Flex
          h={"full"}
          w={"full"}
          transition={"ease-in-out 0.3s"}
          _hover={{ color: "#FA8B02" }}
          justify={"center"}
          align={"center"}
          direction={"row"}
        >
          {TriPrice2 ? (
            <HiMiniArrowUpTray fontSize={20} />
          ) : (
            <HiMiniArrowDownTray fontSize={20} />
          )}
          <Text mx={2} fontWeight={400}>
            Price
          </Text>
        </Flex>
      </Button>
      <Button
        onClick={() => setTriRate(!TriRate)}
        w={"25%"}
        h={"100%"}
        variant={"unstyled"}
      >
        <Flex
          h={"full"}
          w={"full"}
          transition={"ease-in-out 0.3s"}
          _hover={{ color: "#FA8B02" }}
          justify={"center"}
          align={"center"}
          direction={"row"}
        >
          {TriRate ? (
            <HiMiniArrowUpTray fontSize={20} />
          ) : (
            <HiMiniArrowDownTray fontSize={20} />
          )}
          <Text mx={2} fontWeight={400}>
            Rating
          </Text>
        </Flex>
      </Button>{" "}
      <Button
        onClick={() => setTriPrice(!TriPrice)}
        w={"25%"}
        h={"100%"}
        variant={"unstyled"}
      >
        <Flex
          h={"full"}
          w={"full"}
          transition={"ease-in-out 0.3s"}
          _hover={{ color: "#FA8B02" }}
          justify={"center"}
          align={"center"}
          direction={"row"}
        >
          {TriPrice ? (
            <HiMiniArrowUpTray fontSize={20} />
          ) : (
            <HiMiniArrowDownTray fontSize={20} />
          )}
          <Text mx={2} fontWeight={400}>
            Price
          </Text>
        </Flex>
      </Button>{" "}
      <Button
        onClick={() => setTriAlphab(!TriAlphab)}
        w={"25%"}
        h={"100%"}
        variant={"unstyled"}
      >
        <Flex
          h={"full"}
          w={"full"}
          transition={"ease-in-out 0.3s"}
          _hover={{ color: "#FA8B02" }}
          justify={"center"}
          align={"center"}
          direction={"row"}
        >
          <PiPencilSimpleLine fontSize={20} />
          <Text mx={2} fontWeight={400}>
            Name {TriAlphab ? "(A-z)" : "(Z-a)"}
          </Text>
        </Flex>
      </Button>{" "}
    </Flex>
  );
};
