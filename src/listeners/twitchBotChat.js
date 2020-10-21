import config from '../../config/index.js';
import BackgroundColor from '../services/backgroundColor.js';

import clients from '../clients/index.js';
import dataSources from '../dataSources/index.js';
import helpers from './helpers/index.js';

export default async () => {
  try {
    const initializedDataSources = await helpers.initializeDataSources(dataSources);

    clients.twitchBotChat.client.onMessage(async (channel, user, message, msg) => {
      console.log(`[${new Date().toJSON()}] <user> ${message}`); // eslint-disable-line no-console

      if (message.startsWith(config.commandPrefix)) {
        const args = message.toLowerCase().split(' ');
        const command = args.shift().substring(config.commandPrefix.length);

        // Commands
        if (command === 'background' && helpers.isMod(msg)) new BackgroundColor(null, { input: { color: args[0] } }, { dataSources: initializedDataSources }).update();
      }
    });

    console.log(`[${new Date().toJSON()}] Listening: Twtich Chat at irc://irc.chat.twitch.tv:${clients.twitchBotChat.client.port}/`); // eslint-disable-line no-console
  } catch (error) {
    console.log(`[${new Date().toJSON()}] Listening Error: Twtich Chat`); // eslint-disable-line no-console
  }
};
