import { gql } from 'apollo-server';

export default gql`
  type Channel {
    # latestCheer: Cheer
    # latestSubscription: Subscription
    totalFollowers: Int
    totalSubscriptions: Int
  }

  extend type Query {
    getChannel: Channel
  }
`;
