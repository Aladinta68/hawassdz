import React from "react";
import { DetailsLayout } from "../../../../layout/details";
import { useParams } from "react-router-dom";
import { GetOneDestination } from "../../../../api/destination/query";
import { useQuery } from "@apollo/client";
export const DestinationDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GetOneDestination, {
    variables: { getDestinationByIdId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const destination = data.getDestinationById;

  return <DetailsLayout type="destination" data={destination} />;
};