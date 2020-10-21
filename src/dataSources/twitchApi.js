import { ApolloError } from 'apollo-server';
import { DataSource } from 'apollo-datasource';

import config from '../../config/index.js';

export default class TwitchApiDataSource extends DataSource {
  constructor({ clients }) {
    super();
    this.client = clients.twitchApi.client;
    this.clients = clients;
  }

  /**
   * Get Channel
   * @returns {Promise<Object>}
   * @throws {ApolloError}
   */
  async getChannel() {
    try {
      const { id: followedUser } = await this.client.helix.users.getMe();
      const { total: totalFollowers } = await this.client.helix.users.getFollows({ followedUser });
      const subscriptions = await this.client.helix.subscriptions.getSubscriptionsPaginated(followedUser).getAll();
      const totalSubscriptions = subscriptions.filter(sub => sub.userDisplayName !== config.twitch.channel).length;

      return { totalFollowers, totalSubscriptions };
    } catch (error) {
      throw new ApolloError(error.messsage, 'TWITCH_API_GET_CHANNEL_ERROR', error);
    }
  }

  /**
   * Get Total Followers
   * @returns {Promise<number>}
   * @throws {ApolloError}
   */
  async getTotalFollowers() {
    try {
      const { id: followedUser } = await this.client.helix.users.getMe();
      const { total: totalFollowers } = await this.client.helix.users.getFollows({ followedUser });

      return totalFollowers;
    } catch (error) {
      throw new ApolloError(error.messsage, 'TWITCH_API_GET_TOTAL_FOLLOWERS_ERROR', error);
    }
  }

  /**
   * Get Total Subscriptions
   * @returns {Promise<number>}
   * @throws {ApolloError}
   */
  async getTotalSubscriptions() {
    try {
      const { id } = await this.client.helix.users.getMe();
      const subscriptions = await this.client.helix.subscriptions.getSubscriptionsPaginated(id).getAll();

      return subscriptions.filter(sub => sub.userDisplayName !== config.twitch.channel).length;
    } catch (error) {
      throw new ApolloError(error.messsage, 'TWITCH_API_GET_TOTAL_SUBSCRIPTIONS_ERROR', error);
    }
  }
}
