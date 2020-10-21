// import BackgroundColor from '../services/backgroundColor.js';

export default {
  // Channel: {
  //   totalFollowers: async (parent, args, { dataSources }) => dataSources.twitchApi.getTotalFollowers(),
  //   totalSubscriptions: async (parent, args, { dataSources }) => dataSources.twitchApi.getTotalSubscriptions(),
  // },
  Query: {
    getChannel: async (parent, args, { dataSources }) => dataSources.twitchApi.getChannel(),
  },
};
