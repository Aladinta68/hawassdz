import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { SearchLayout } from "../../../../layout/search";
import { GetRestaurants } from './../../../../api/restaurant/query';

export const Restaurants = () => {
  const [SelectedPage, setSelectedPage] = useState(1);
  const [SortPage, setSortPage] = useState({
    sortBy: "name",
    sortDirection: "asc",
  });

  const { loading, error, data } = useQuery(GetRestaurants, {
    variables: {
      page: SelectedPage,
      perPage: 4,
      sortBy: SortPage.sortBy,
      sortDirection: SortPage.sortDirection,
    },
  });
  if (error) {
    console.log(error);
  }
  const restaurants = data?.getAllRestaurants?.restaurants;
  const maxPage = data?.getAllRestaurants.maxPage;
  return (
    <SearchLayout
      setSortPage={setSortPage}
      loading={loading}
      SelectedPage={SelectedPage}
      setSelectedPage={setSelectedPage}
      maxPage={maxPage}
      source="restaurants"
      cardType="restaurants"
      data={restaurants}
    />
  );
};
