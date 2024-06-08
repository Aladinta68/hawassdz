import React from "react";
import { Container, Divider, Flex, Spacer } from "@chakra-ui/react";
import { Header } from "./views/header/index";
import { Popular } from "./views/popular/index";
import { Description } from "./views/description/index";
import { Steps } from "./views/steps/index";
import { useQuery } from "@apollo/client";
import { GetHotels } from "../../api/hotel/query";
import { GetDestinations } from "../../api/destination/query";
import { GetRestaurants } from "./../../api/restaurant/query";
import { GetTravels } from "../../api/travel/query";
const Home = () => {
  const {
    loading: hotelLoading,
    error: hotelError,
    data: hotelData,
  } = useQuery(GetHotels, {
    variables: {
      page: 1,
      perPage: 8,
      sortBy: "name",
      sortDirection: "asc",
      
    },
  });
  const {
    loading: restaurantLoading,
    error: restaurantError,
    data: restaurantData,
  } = useQuery(GetRestaurants, {
    variables: {
      page: 1,
      perPage: 8,
      sortBy: "name",
      sortDirection: "asc",
    },
  });
  const {
    loading: destinationLoading,
    error: destinationError,
    data: destinationData,
  } = useQuery(GetDestinations, {
    variables: {
      page: 1,
      perPage: 8,
      sortBy: "name",
      sortDirection: "asc",
    },
  });

  const {
    loading: travelLoading,
    error: travelError,
    data: travelData,
  } = useQuery(GetTravels, {
    variables: {
      page: 1,
      perPage: 8,
      sortBy: "name",
      sortDirection: "asc",
      isActive: false,

    },
  });
  if (hotelError) {
    console.log(hotelError);
  }
  if (restaurantError) {
    console.log(restaurantError);
  }
  if (destinationError) {
    console.log(destinationError);
  }
  if (travelError) {
    console.log(travelError);
  }

  const destinations = destinationData?.getAllDestinations?.destinations;
  const hotels = hotelData?.getAllHotels?.hotels;
  const restaurants = restaurantData?.getAllRestaurants?.restaurants;
  const travels = travelData?.getAllTravels?.travels;
  return (
    <Flex direction={"column"}>
      <Header />
      <Container maxW={"8xl"}>
        <Spacer height={50} />
        <Popular
          type="destinations"
          mydata={destinations}
          loading={destinationLoading}
        />
        <Spacer height={50} />
        <Popular type="hotels" mydata={hotels} loading={hotelLoading} />
        <Spacer height={50} />
        <Popular
          type="restaurants"
          mydata={restaurants}
          loading={restaurantLoading}
        />
        <Spacer height={50} />
        <Steps />
        <Spacer height={50} />
        <Popular type="trips" mydata={travels} loading={travelLoading} />
        <Description />
        <Divider height={50} />
      </Container>
    </Flex>
  );
};

export default Home;
