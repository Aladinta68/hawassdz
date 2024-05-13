import React from "react";
import { DetailsLayout } from "../../../../layout/details";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetRestaurantByID } from "../../../../api/restaurant/query";
export const RestaurantDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GetRestaurantByID, {
    variables: { getRestaurantByIdId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const restaurant = data.getRestaurantById;
  return <DetailsLayout type="restaurant" data={restaurant} />;
};
