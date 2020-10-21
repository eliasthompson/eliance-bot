import { ApolloServer } from 'apollo-server';

import dataSources from '../dataSources/index.js';
import resolvers from '../resolvers/index.js';
import typeDefs from '../typeDefs/index.js';

export default async () => {
  try {
    const server = new ApolloServer({ dataSources, resolvers, typeDefs });
    const { url } = await server.listen();

    console.log(`[${new Date().toJSON()}] Listening: Apollo Server at ${url}`); // eslint-disable-line no-console
  } catch (error) {
    console.log(`[${new Date().toJSON()}] Listening Error: Apollo Server`); // eslint-disable-line no-console
  }
};
