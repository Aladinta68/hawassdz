import React from "react";
import { SearchLayout } from "../../../../layout/search";
import { GetDestinations } from "../../../../api/destination/query";
import { useQuery, NetworkStatus } from "@apollo/client";

export const Destinations = () => {
  const { loading, error, data, refetch, variables, networkStatus } = useQuery(
    GetDestinations,
    {
      variables: {
        page: 1,
        perPage: 4,
        sortBy: "name",
        sortDirection: "asc",
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  if (error) {
    console.log(error);
  }

  const currentPage = variables.page;
  const currentSortBy = variables.sortBy;
  const currentSortDirection = variables.sortDirection;
  const destinations = data?.getAllDestinations?.destinations;
  const maxPage = data?.getAllDestinations.maxPage;

  return (
    <SearchLayout
      currentPage={currentPage}
      currentSortBy={currentSortBy}
      currentSortDirection={currentSortDirection}
      maxPage={maxPage}
      refetch={refetch}
      loading={loading || networkStatus === NetworkStatus.refetch}
      data={destinations}
      source={"destinations"}
      cardType="destinations"
    />
  );
};
