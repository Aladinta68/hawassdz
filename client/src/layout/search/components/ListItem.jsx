import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "./../../../components/card/index";

export const ListItem = ({
  loading,
  data,
  setGridTemp,
  setisHorizontal,
  center,
  cardType,
}) => {
  return (
    <Grid gap={5} templateColumns={setGridTemp()}>
      {data.map((item, index) => (
        <GridItem key={index} colSpan={1}>
          <Stack w={"100%"} h={"100%"} align={center() && "center"}>
            <CustomCard
              loading={loading}
              isHorizontal={setisHorizontal()}
              type={cardType}
              data={item}
            />
          </Stack>
        </GridItem>
      ))}
    </Grid>
  );
};
