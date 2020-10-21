import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    root: String
  }

  type Query {
    root: String
  }

  type Subscription {
    root: String
  }

  type Success {
    success: Boolean
  }
`;
