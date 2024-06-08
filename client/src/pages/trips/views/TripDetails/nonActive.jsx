import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetALLTravelsById } from "../../../../api/travel/query";
import { DetailsLayoutNotActive } from './../../../../layout/details copy/index';
export const TripDetailsNonActive = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GetALLTravelsById, {
    variables: { getTravelByIdId: id },
  });

  if (error) {
    return <Navigate to="/notFound" />;
  }
  const hotel = data?.getTravelById;
  return <DetailsLayoutNotActive loading={loading} type="trips" data={hotel} />;
};

