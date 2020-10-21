import { ChatClient } from 'twitch-chat-client';

import config from '../../config/index.js';

export default class TwitchChannelChatClient {
  async initialize(authProvider) {
    try {
      this.client = new ChatClient(authProvider, { channels: [config.twitch.channel] });

      await this.client.connect();

      console.log(`[${new Date().toJSON()}] Initialized: Twitch Channel Chat Client`); // eslint-disable-line no-console
    } catch (error) {
      console.log(`[${new Date().toJSON()}] Initialization Error: TwitchChannelChatClient`, error); // eslint-disable-line no-console
      throw error;
    }
  }
}
