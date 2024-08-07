import React from "react";
import { DetailsLayout } from "../../../../layout/details";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetALLTravelsById } from "../../../../api/travel/query";
export const TripDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GetALLTravelsById, {
    variables: { getTravelByIdId: id },
  });

  if (error) {
    return <Navigate to="/notFound" />;
  }
  const hotel = data?.getTravelById;
  return <DetailsLayout loading={loading} type="trips" data={hotel} />;
};
