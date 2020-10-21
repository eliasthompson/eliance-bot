import { ApiClient } from 'twitch';

export default class TwitchApiClient {
  initialize(authProvider) {
    try {
      this.client = new ApiClient({ authProvider, preAuth: true });

      console.log(`[${new Date().toJSON()}] Initialized: Twitch API Client`); // eslint-disable-line no-console
    } catch (error) {
      console.log(`[${new Date().toJSON()}] Initialization Error: TwitchApiClient`, error); // eslint-disable-line no-console
      throw error;
    }
  }
}
