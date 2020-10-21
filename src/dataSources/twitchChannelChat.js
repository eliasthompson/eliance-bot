import { ApolloError } from 'apollo-server';
import { DataSource } from 'apollo-datasource';

import config from '../../config/index.js';

export default class TwitchChannelChatDataSource extends DataSource {
  constructor({ clients }) {
    super();
    this.client = clients.twitchChannelChat.client;
    this.clients = clients;
  }

  /**
   * Add VIP
   * @param {string} userName
   * @returns {Promise<Object>}
   */
  async addVip(userName) {
    try {
      return this.client.say(config.twitch.channel, `/vip ${userName}`);
    } catch (error) {
      throw new ApolloError(error.messsage, 'TWITCH_CHANNEL_CHAT_ADD_VIP_ERROR', error);
    }
  }
}
