import { promises as fs } from 'fs';

import helpers from './helpers/index.js';

export default class TwitchBotAuthProvider {
  async initialize() {
    try {
      const { accessToken, refreshToken } = JSON.parse(await fs.readFile('./botTokens.json', 'UTF-8'));

      this.auth = helpers.getTwitchAuthProvider(accessToken, refreshToken, async (tokens) => {
        await fs.writeFile('./botTokens.json', JSON.stringify({
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        }, null, 2), 'UTF-8');
      });

      console.log(`[${new Date().toJSON()}] Initialized: Twitch Bot Auth Provider`); // eslint-disable-line no-console
    } catch (error) {
      console.log(`[${new Date().toJSON()}] Initialization Error: TwitchBotAuthProvider`, error); // eslint-disable-line no-console
      throw error;
    }
  }
}
