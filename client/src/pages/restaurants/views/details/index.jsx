import React from "react";
import { DetailsLayout } from "../../../../layout/details";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetRestaurantByID } from "../../../../api/restaurant/query";
export const RestaurantDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GetRestaurantByID, {
    variables: { getRestaurantByIdId: id },
  });

  if (error) {
    return <Navigate to="/notFound" />;
  }  const restaurant = data?.getRestaurantById;
  return <DetailsLayout loading={loading} type="restaurant" data={restaurant} />;
};
