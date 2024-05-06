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
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";

export const Header = ({ data, setSortPage, setisRow, isRow }) => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "name_asc") {
      setSortPage({ sortBy: "name", sortDirection: "asc" });
    }
    if (selectedValue === "name_desc") {
      setSortPage({ sortBy: "name", sortDirection: "desc" });
    }
    if (selectedValue === "createdAt_asc") {
      setSortPage({ sortBy: "createdAt", sortDirection: "asc" });
    }
    if (selectedValue === "createdAt_desc") {
      setSortPage({ sortBy: "createdAt", sortDirection: "desc" });
    }
  };
  return (
    <VStack
      bg={useColorModeValue("#ffffff", "#000000")}
      zIndex={2}
      pos={{base:"sticky",md:"static"}}
      top={{base:"60px",md:"0"}}
      py={{ base: 8, md: 0 }}
    >
      <Stack w={"100%"}>
        <InputGroup w={"100%"}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            _placeholder={{ color: useColorModeValue("#000000", "#ffffff") }}
            type="text"
            placeholder="بحث..."
          />
        </InputGroup>
      </Stack>
      <HStack spacing={5} w={"100%"} h={"50px"}>
        <Menu>
          <MenuButton>
            <Button
              borderRadius={5}
              border={"1px solid #d8e5f4"}
              p={2}
              rightIcon={<LuFilter />}
              display={"flex"}
              alignItems={"center"}
              fontWeight={500}
              variant={"unstyled"}
            >
              المرشحات
            </Button>
          </MenuButton>
          <MenuList></MenuList>
        </Menu>
        <Spacer />
        <HStack>
          <Text>ترتيب حسب:</Text>
          <Select
            w={"auto"}
            dir="ltr"
            defaultValue={"name_asc"}
            onChange={handleSortChange}
          >
            <option value={"name_asc"}>اسم (تصاعدي)</option>
            <option value={"name_desc"}>اسم (تنازلي)</option>
            <option value={"createdAt_asc"}>الأحدث (تصاعدي)</option>
            <option value={"createdAt_desc"}>الأحدث (تنازلي)</option>
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
        <Text>العثور على {data?.length} نتائج</Text>
      </Stack>
    </VStack>
  );
};
