import { promises as fs } from 'fs';

import helpers from './helpers/index.js';

export default class TwitchChannelAuthProvider {
  async initialize() {
    try {
      const { bot, channel: { accessToken, refreshToken } = {} } = JSON.parse(await fs.readFile('./tokens.json', 'UTF-8'));

      this.auth = helpers.getTwitchAuthProvider(accessToken, refreshToken, async (tokens) => {
        await fs.writeFile('./tokens.json', JSON.stringify({
          bot,
          channel: {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
          },
        }, null, 2), 'UTF-8');
      });

      console.log(`[${new Date().toJSON()}] Initialized: Twitch Channel Auth Provider`); // eslint-disable-line no-console
    } catch (error) {
      console.log(`[${new Date().toJSON()}] Initialization Error: TwitchChannelAuthProvider`, error); // eslint-disable-line no-console
      throw error;
    }
  }
}
