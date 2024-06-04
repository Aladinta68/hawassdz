import React from "react";
import { DetailsLayout } from "../../../../layout/details";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetHotelByID } from "../../../../api/hotel/query";
export const HotelDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GetHotelByID, {
    variables: { getHotelByIdId: id },
  });

  if (error) return <p>Error: {error.message}</p>;
  const hotel = data?.getHotelById;
  return <DetailsLayout loading={loading} type="hotel" data={hotel} />;
};
