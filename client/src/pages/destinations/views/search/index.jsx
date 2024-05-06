import React, { useState } from "react";
import { SearchLayout } from "../../../../layout/search";
import { GetDestinations } from "../../../../api/destination/query";
import { useQuery } from "@apollo/client";
export const Destinations = () => {
  const [SelectedPage, setSelectedPage] = useState(1);
  const [SortPage, setSortPage] = useState({
    sortBy: "name",
    sortDirection: "asc",
  });

  const { loading, error, data } = useQuery(GetDestinations, {
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
  const destinations = data?.getAllDestinations?.destinations;
  const maxPage = data?.getAllDestinations.maxPage;
  return (
    <SearchLayout
      setSortPage={setSortPage}
      loading={loading}
      SelectedPage={SelectedPage}
      setSelectedPage={setSelectedPage}
      maxPage={maxPage}
      data={destinations}
      source={"destinations"}
      cardType="destinations"
    />
  );
};
