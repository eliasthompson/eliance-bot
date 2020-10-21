import { gql } from 'apollo-server';

export default gql`
  input UpdateBackgroundColorInput {
    color: String!
  }

  extend type Mutation {
    updateBackgroundColor(input: UpdateBackgroundColorInput!): Success
  }
`;
