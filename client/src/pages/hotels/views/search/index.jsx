import React from "react";
import { useQuery } from "@apollo/client";
import { SearchLayout } from "../../../../layout/search";
import { GetHotels } from './../../../../api/hotel/query';

export const Hotels = () => {
  const { loading, error, data } = useQuery(GetHotels, {
    variables: {
      page: 1,
      perPage: 10,
      sortBy: "name",
      sortDirection: "asc",
    },
  });
  const hotels = data?.getAllHotels?.hotels;
  return <SearchLayout source="hotels" cardType="hotels" data={hotels} />;
};
