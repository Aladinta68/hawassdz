import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  Select,
  Spacer,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";

export const Header = ({ setisRow, isRow }) => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });

  return (
    <VStack >
      <Stack w={"100%"}>
        <InputGroup w={"100%"}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </Stack>
      <HStack spacing={5} w={"100%"} h={"50px"}>
        <Menu>
          <MenuButton>
            <Button
              borderRadius={5}
              border={"1px solid #d8e5f4"}
              p={2}
              leftIcon={<LuFilter />}
              display={"flex"}
              alignItems={"center"}
              fontWeight={500}
              variant={"unstyled"}
            >
              Filter
            </Button>
          </MenuButton>
          <MenuList></MenuList>
        </Menu>
        <Spacer />
        <HStack>
          <Text>Sort by:</Text>
          <Select w={"auto"} defaultValue={"popular"}>
            <option value={"popular"}>Popular</option>
          </Select>
        </HStack>
        {breakpoint != "base" && (
          <HStack spacing={0}>
            <IconButton
              as={IoGridOutline}
              variant={"unstyled"}
              cursor={"pointer"}
              p={2}
              color={isRow ? "#9e9d9d" : "#1685f3"}
              onClick={() => setisRow(false)}
            />
            <IconButton
              as={HamburgerIcon}
              variant={"unstyled"}
              cursor={"pointer"}
              borderRightRadius={0}
              p={2}
              color={isRow ? "#1685f3" : "#9e9d9d"}
              onClick={() => setisRow(true)}
            />
          </HStack>
        )}
      </HStack>
      <Stack w={"100%"}>
        <Text>
          Found 29 result arround{" "}
          <Text as={"span"} fontWeight={"Bold"}>
            "Test search"
          </Text>
        </Text>
      </Stack>
    </VStack>
  );
};
