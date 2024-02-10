import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "./components/Header";

export const TripInformation = () => {
  return (
    <Flex direction={'column'} w={'100%'}>
      <Header />
      <Box my={5} w={"100%"} h={"400px"} bg={"gray"}>
        Images
      </Box>
      <Text>
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut
        magni nesciunt? Quo quidem neque iste expedita est dolor similique ut
        quasi maxime ut deserunt autem At praesentium voluptatem aut libero
        nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut
        aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et
        quasi alias ut rerum suscipit et nihil deleniti. Ex optio sequi et quos
        praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo
        deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi
        sint ab cumque veritatis aut provident aliquam. Aut aspernatur
        consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias
        ut rerum suscipit et nihil deleniti.
      </Text>
    </Flex>
  );
};
