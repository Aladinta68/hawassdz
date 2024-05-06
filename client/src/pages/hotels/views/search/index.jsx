import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { SearchLayout } from "../../../../layout/search";
import { GetHotels } from "./../../../../api/hotel/query";

export const Hotels = () => {
  const [SelectedPage, setSelectedPage] = useState(1);
  const [SortPage, setSortPage] = useState({
    sortBy: "name",
    sortDirection: "asc",
  });

  const { loading, error, data } = useQuery(GetHotels, {
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
  const hotels = data?.getAllHotels?.hotels;
  const maxPage = data?.getAllHotels.maxPage;
  return (
    <SearchLayout
      setSortPage={setSortPage}
      loading={loading}
      SelectedPage={SelectedPage}
      setSelectedPage={setSelectedPage}
      maxPage={maxPage}
      source="hotels"
      cardType="hotels"
      data={hotels}
    />
  );
};
