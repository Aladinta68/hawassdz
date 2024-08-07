import React from "react";
import { useQuery,NetworkStatus } from "@apollo/client";
import { SearchLayout } from "../../../../layout/search";
import { GetRestaurants} from './../../../../api/restaurant/query';

export const Restaurants = () => {

  const { loading, error, data, refetch, variables,networkStatus  } = useQuery(GetRestaurants, {
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
  const restaurants = data?.getAllRestaurants?.restaurants;
  const maxPage = data?.getAllRestaurants.maxPage;
  return (
    <SearchLayout
       currentPage={currentPage}
      currentSortBy={currentSortBy}
      currentSortDirection={currentSortDirection}
      maxPage={maxPage}
      refetch={refetch}
      loading={loading || networkStatus === NetworkStatus.refetch}
      data={restaurants}
      source="restaurants"
      cardType="restaurants"
    />
  );
};
