import { gql } from "apollo-server";
export const ratingTypeDefs = gql`
  scalar Upload
  type Mutation {
    addRating(input: addRatingInput!): Rating!
  }
  input addRatingInput {
    stars: Float!
    feedback: String
    tableName: String!
    tableId: String!
  }
  
`;

export default ratingTypeDefs;
