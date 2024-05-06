import React from "react";
import { SearchLayout } from "../../../../layout/search";
import { TripsData } from "../../../../data/tripdata";
export const Trips = () => {
  return (
    <SearchLayout source={"trips"} cardType="trips" data={TripsData.carddata} />
  );
};
