import {
  Container,
  Divider,
  Stack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MAP } from "./components/MAP";
import { ListItem } from "./components/ListItem";
import { Header } from "./components/Header";
import { Paggination } from "../../components/Paggination";

export const SearchLayout = ({ cardType, data }) => {
  const [CardData, setCardData] = useState(data[0]);

  const handlePage = (Pnumber) => {
    setCardData(data[Pnumber]);
  };

  const breakpoint = useBreakpointValue({ base: "base", md: "md" });
  const [isRow, setisRow] = useState(false);
  const setGridTemp = () => {
    let GridTemp;
    if (isRow) {
      return (GridTemp = "repeat(1,1fr)");
    } else if (breakpoint === "base") {
      return (GridTemp = "repeat(1,1fr)");
    } else if (breakpoint === "md") {
      return (GridTemp = "repeat(2,1fr)");
    }
    return GridTemp;
  };
  const setisHorizontal = () => {
    if (breakpoint === "base") {
      return false;
    } else return isRow;
  };
  const center = () => {
    if (breakpoint === "base") {
      return true;
    } else if (!isRow) {
      return true;
    }

    return false;
  };
  return (
    <Container mt={"80px"} maxW={"8xl"}>
      <VStack py={20} w={"100%"}>
        <Stack
          spacing={10}
          direction={{ base: "column", xl: "row" }}
          h={"100%"}
          w={"100%"}
        >
          <Stack w={{ base: "100%", xl: "60%" }} h={"100%"}>
            <Header setisRow={setisRow} isRow={isRow} />
            <Divider />
            <ListItem
              cardType={cardType}
              data={CardData.data}
              center={center}
              setGridTemp={setGridTemp}
              setisHorizontal={setisHorizontal}
            />
            <Stack pt={10}  w={"100%"} align={"center"} justify={"center"}>
              {" "}
              <Paggination
                DataLength={data.length}
                Selected={CardData.PageNumber}
                onPageChange={handlePage}
              />
            </Stack>
          </Stack>
          <MAP />
        </Stack>
      </VStack>
    </Container>
  );
};
