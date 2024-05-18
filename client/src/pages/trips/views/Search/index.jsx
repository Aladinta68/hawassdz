import React from "react";
import { SearchLayout } from "../../../../layout/search";
import { GetTravels } from "./../../../../api/travel/query";
import { useQuery } from "@apollo/client";
export const Trips = () => {
  const { loading, error, data, refetch, variables } = useQuery(GetTravels, {
    variables: {
      page: 1,
      perPage: 4,
      sortBy: "name",
      sortDirection: "asc",
    },
  });
  if (error) {
    console.log(error);
  }
  const currentPage = variables.page;
  const currentSortBy = variables.sortBy;
  const currentSortDirection = variables.sortDirection;
  const travels = data?.getAllTravels?.travels;
  const maxPage = data?.getAllTravels.maxPage;
  return (
    <SearchLayout
      currentPage={currentPage}
      currentSortBy={currentSortBy}
      currentSortDirection={currentSortDirection}
      maxPage={maxPage}
      refetch={refetch}
      loading={loading}
      data={travels}
      source={"trips"}
      cardType="trips"
    />
  );
};
