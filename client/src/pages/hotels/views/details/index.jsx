import React from "react";
import { DetailsLayout } from "../../../../layout/details";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetHotelByID } from "../../../../api/hotel/query";
export const HotelDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GetHotelByID, {
    variables: { getHotelByIdId: id },
  });

  if (error) {
    return <Navigate to="/notFound" />;
  }  const hotel = data?.getHotelById;
  return <DetailsLayout loading={loading} type="hotel" data={hotel} />;
};
