import { gql } from "apollo-server";

export const sharedTypeDefs = gql`
  scalar Upload

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String
    dateOfBirth: String
    gender: String
    complete: Boolean
    image: File
  }
  type Wilaya {
    id: ID!
    name: String!
    description: String
    images: [File]
  }
  type File {
    url: String!
  }
  type Rating {
    stars: Float!
    feedback: String
  }
  type Equipement {
    id: ID!
    item: String
  }
  type MapLocation {
    longitude: Float!
    latitude: Float!
  }

  type ContactInfo {
    phone: String
    email: String
    website: String
    facebook: String
  }
  input RatingInput {
    stars: String!
    feedback: String
  }
  input MapLocationInput {
    longitude: Float!
    latitude: Float!
  }
  input MapLocationUpdateInput {
    longitude: Float
    latitude: Float
  }
  input ContactInfoInput {
    phone: String
    email: String
    website: String
    facebook: String
  }
  input ContactInfoUpdateInput {
    phone: String
    email: String
    website: String
    facebook: String
  }
`;
export default sharedTypeDefs;
