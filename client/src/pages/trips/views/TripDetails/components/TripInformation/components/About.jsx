import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <Text mb={5} fontWeight={600}>About</Text>
      <Text>
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut
        magni nesciunt? Quo quidem neque iste expedita est dolor similique ut
        quasi maxime ut deserunt entore aliquid et...
        {!isExpanded && (
          <Text
            cursor={"pointer"}
            ml={1}
            textDecor={"underline"}
            fontWeight={500}
            as={"span"}
            variant={"unstyled"}
            onClick={toggleExpand}
          >
            Read More
          </Text>
        )}
      </Text>
      {isExpanded && (
        <>
          <Text>
            Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
            aut magni nesciunt? Quo deserunt autem At praesentium voluptatem aut
            libero nisi. Et eligendi sint ab cumque veritatis aut provident
            aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut
            inventore aliquid et quasi alias ut rerum suscipit et nihil
            deleniti.
          </Text>
          <Text fontWeight={500} cursor={'pointer'} textDecor={'underline'} mt={2} onClick={toggleExpand}>
            Read Less
          </Text>
        </>
      )}
    </>
  );
};
