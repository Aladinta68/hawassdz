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
  refetch,
  source,
  cardType,
  data,
  maxPage,
  currentPage,
  currentSortBy,
  currentSortDirection,
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
                currentSortBy={currentSortBy}
                currentSortDirection={currentSortDirection}
                setisRow={setisRow}
                isRow={isRow}
                refetch={refetch}
              />
              <Divider />

              {loading && (
                <ListItem
                  loading={true}
                  cardType={cardType}
                  data={[{}, {}, {}, {}]}
                  center={() => center({ breakpoint, isRow })}
                  setGridTemp={() => setGridTemp({ isRow, breakpoint })}
                  setisHorizontal={() => setisHorizontal({ breakpoint, isRow })}
                />
              )}
              {data?.length > 0 && (
                <>
                  <ListItem
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
                      currentPage={currentPage}
                      refetch={refetch}
                      maxPage={maxPage}
                    />
                  </Stack>
                </>
              )}
              {!loading && data?.length <= 0 && (
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
