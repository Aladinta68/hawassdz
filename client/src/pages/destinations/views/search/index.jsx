import React from "react";
import { SearchLayout } from "../../../../layout/search";
import { DestinationsData } from "../../../../data/destinationdata";
export const Destinations = () => {
  return (
    <SearchLayout cardType="destinations" data={DestinationsData.carddata} />
  );
};
