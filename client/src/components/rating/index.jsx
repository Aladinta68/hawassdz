import React, { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
export const Rating = ({
  maxStars = 5,
  initialRating = 0,
  onChange,
  isReadOnly,
}) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (starIndex) => {
    const newRating = starIndex + 1;
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };
  return (
    <Flex>
      {[...Array(maxStars)].map((_, index) =>
        isReadOnly ? (
          <StarIcon
            mx={0.5}
            key={index}
            aria-label={`Star ${index + 1}`}
            color={index < rating ? "yellow.500" : "gray.300"}
          />
        ) : (
          <StarIcon
            as="button"
            cursor={"pointer"}
            mx={0.5}
            key={index}
            aria-label={`Star ${index + 1}`}
            color={index < rating ? "yellow.500" : "gray.300"}
            onClick={() => handleStarClick(index)}
          />
        )
      )}
    </Flex>
  );
};
