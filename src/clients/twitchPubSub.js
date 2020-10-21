import { PubSubClient } from 'twitch-pubsub-client';

export default class TwitchPubSubClient {
  constructor() {
    this.client = new PubSubClient();
  }

  async initialize(client) {
    try {
      await this.client.registerUserListener(client);

      console.log(`[${new Date().toJSON()}] Initialized: Twitch PubSub Client`); // eslint-disable-line no-console
    } catch (error) {
      console.log(`[${new Date().toJSON()}] Initialization Error: TwitchPubSubClient`, error); // eslint-disable-line no-console
      throw error;
    }
  }
}
