import { gql } from "apollo-server";

export const travelTypeDefs = gql`
  scalar Upload
  type Travel {
    id: ID
    name: String
    type: String
    description: String
    destination: String
    longitude: String
    dateDepart: String
    dateArrive: String
    numberPerson: String
    availablePlace: String
    overallRating: Float
    gender: String
    ageRange: String
    price: String
    transportType: String
    images: [File]
    ratings: [Rating]
    mapLocation: MapLocation
    contactInfo: ContactInfo
    user: User
    status: String
    createdAt: String
    updatedAt: String
  }
  type Query {
    getTravelById(id: ID!): Travel!
    getTravelsByUser(
      page: Int
      perPage: Int
      sortBy: String
      sortDirection: String
    ): TravelsOutpot!
    getAllTravels(
      page: Int
      perPage: Int
      sortBy: String
      sortDirection: String
      status: String
    ): TravelsOutpot!
  }

  type Mutation {
    deleteTravelById(id: ID!): DeleteTravelResponse!
    addTravel(input: addTravelInput!): Travel!
    updateTravelById(id: ID!, input: UpdateTravelInput!): Travel!
  }
  type TravelsOutpot {
    travels: [Travel!]
    maxPage: Int
  }
  type DeleteTravelResponse {
    message: String!
  }
  input addTravelInput {
    name: String!
    type: String!
    description: String
    destination: String!
    longitude: String!
    dateDepart: String!
    dateArrive: String!
    numberPerson: String!
    gender: String
    ageRange: String
    price: String!
    transportType: String!
    mapLocation: MapLocationInput!
    contactInfo: ContactInfoInput!
    files: [Upload!]
  }
  input UpdateTravelInput {
    name: String
    type: String
    description: String
    destination: String
    longitude: String
    dateDepart: String
    dateArrive: String
    numberPerson: String
    availablePlace: String
    gender: String
    ageRange: String
    price: String
    transportType: String
    mapLocation: MapLocationUpdateInput
    contactInfo: ContactInfoUpdateInput
    files: [Upload!]
  }
`;
export default travelTypeDefs;
