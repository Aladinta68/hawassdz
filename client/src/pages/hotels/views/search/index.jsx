import React from "react";
import { SearchLayout } from "../../../../layout/search";
import { HotelsData } from "../../../../data/hotelsdata";
export const Hotels = () => {
  return (
    <SearchLayout cardType="hotels" data={HotelsData.carddata} />
  )
}
