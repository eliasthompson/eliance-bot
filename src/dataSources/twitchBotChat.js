import { ApolloError } from 'apollo-server';
import { DataSource } from 'apollo-datasource';

import config from '../../config/index.js';

export default class TwitchBotChatDataSource extends DataSource {
  constructor({ clients }) {
    super();
    this.client = clients.twitchBotChat.client;
    this.clients = clients;
  }

  /**
   * Say
   * @param {string} message
   * @returns {Promise<Object>}
   */
  async say(message) {
    try {
      return this.client.say(config.twitch.channel, message);
    } catch (error) {
      throw new ApolloError(error.messsage, 'TWITCH_BOT_CHAT_SAY_ERROR', error);
    }
  }
}
