import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

export const FavorateButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const handleToggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };
  return (
    <Button
      colorScheme={isFavorited ? "teal" : "gray"}
      onClick={handleToggleFavorite}
    >
      {isFavorited ? "Favorited" : "Add to Favorites"}
    </Button>
  );
};
