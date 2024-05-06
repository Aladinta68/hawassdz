import {
  Alert,
  AlertIcon,
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MAP } from "./components/MAP";
import { ListItem } from "./components/ListItem";
import { Header } from "./components/Header";
import { Paggination } from "../../components/Paggination";
import { handleHeading, handleImage, handleText } from "./utils/headerData";
import { center, setGridTemp, setisHorizontal } from "./utils/pageFomat";

export const SearchLayout = ({
  loading,
  setSortPage,
  SelectedPage,
  setSelectedPage,
  source,
  cardType,
  data,
  maxPage,
}) => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });
  const [isRow, setisRow] = useState(false);

  return (
    <VStack pb={20} w={"full"} h={"full"}>
      <Stack mt={5} mb={50} pos={"relative"} w={"full"} h={"250px"}>
        <Image
          pos={"absolute"}
          w={"full"}
          h={"full"}
          src={handleImage(source)}
        />
        <Box
          pos={"absolute"}
          w={"full"}
          h={"full"}
          bg={"#000000"}
          opacity={0.5}
        />
        <VStack
          color={"#ffffff"}
          pos={"relative"}
          w={"full"}
          h={"full"}
          align={"center"}
          justify={"center"}
          spacing={5}
        >
          <Heading size={"2xl"} fontWeight={"500"}>
            {handleHeading(source)}
          </Heading>
          <Text fontSize={"22"}>{handleText(source)}</Text>
        </VStack>
      </Stack>
      <Container maxW={"8xl"}>
        <VStack w={"100%"}>
          <Stack
            spacing={10}
            direction={{ base: "column", xl: "row" }}
            h={"100%"}
            w={"100%"}
          >
            <Stack w={{ base: "100%", xl: "60%" }} h={"100%"}>
              <Header
                data={data}
                setSortPage={setSortPage}
                setisRow={setisRow}
                isRow={isRow}
              />
              <Divider />
              {data && data.length > 0 ? (
                <>
                  <ListItem
                    loading={loading}
                    cardType={cardType}
                    data={data}
                    center={() => center({ breakpoint, isRow })}
                    setGridTemp={() => setGridTemp({ isRow, breakpoint })}
                    setisHorizontal={() =>
                      setisHorizontal({ breakpoint, isRow })
                    }
                  />
                  <Stack pt={10} w={"100%"} align={"center"} justify={"center"}>
                    <Paggination
                      SelectedPage={SelectedPage}
                      setSelectedPage={setSelectedPage}
                      MaxPage={maxPage}
                    />
                  </Stack>
                </>
              ) : (
                <Alert status="warning">
                  <AlertIcon />
                  لا توجد اي بيانات لعرضها!
                </Alert>
              )}
            </Stack>
            <MAP />
          </Stack>
        </VStack>
      </Container>
    </VStack>
  );
};
