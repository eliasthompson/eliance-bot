import OBSWebSocket from 'obs-websocket-js';

import config from '../../config/index.js';

export default class ObsClient {
  constructor() {
    this.client = new OBSWebSocket();
  }

  async initialize() {
    try {
      await this.client.connect(config.obs);

      console.log(`[${new Date().toJSON()}] Initialized: OBS Client`); // eslint-disable-line no-console
    } catch (error) {
      console.log(`[${new Date().toJSON()}] Initialization Error: ObsClient`, error); // eslint-disable-line no-console
      throw error;
    }
  }
}
