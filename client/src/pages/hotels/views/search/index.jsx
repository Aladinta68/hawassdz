import React from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import { SearchLayout } from "../../../../layout/search";
import { GetHotels } from "./../../../../api/hotel/query";

export const Hotels = () => {
  const { loading, error, data, refetch, variables,networkStatus } = useQuery(GetHotels, {
    variables: {
      page: 1,
      perPage: 4,
      sortBy: "name",
      sortDirection: "asc",
    },
    notifyOnNetworkStatusChange: true,
  });
  if (error) {
    console.log(error);
  }
  const currentPage = variables.page;
  const currentSortBy = variables.sortBy;
  const currentSortDirection = variables.sortDirection;
  const hotels = data?.getAllHotels?.hotels;
  const maxPage = data?.getAllHotels.maxPage;
  return (
    <SearchLayout
      currentPage={currentPage}
      currentSortBy={currentSortBy}
      currentSortDirection={currentSortDirection}
      maxPage={maxPage}
      refetch={refetch}
      loading={loading || networkStatus === NetworkStatus.refetch}
      data={hotels}
      source="hotels"
      cardType="hotels"
    />
  );
};
