import React from "react";
import { RestaurantsData } from "../../../../data/restaurantdata";
import { SearchLayout } from '../../../../layout/search';
export const Restaurants = () => {
  return (
    <SearchLayout source='restaurants' cardType="restaurants" data={RestaurantsData.carddata} />
  )
}
