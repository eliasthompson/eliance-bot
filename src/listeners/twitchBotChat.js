import BackgroundColor from '../services/backgroundColor.js';
import clients from '../clients/index.js';
import config from '../../config/index.js';
import helpers from './helpers/index.js';
import rawDataSources from '../dataSources/index.js';

export default async () => {
  try {
    const dataSources = await helpers.initializeDataSources(rawDataSources);

    clients.twitchBotChat.client.onMessage(async (channel, user, message, msg) => {
      console.log(`[${new Date().toJSON()}] <${user}> ${message}`); // eslint-disable-line no-console

      if (message.startsWith(config.commandPrefix)) {
        const args = message.toLowerCase().split(' ');
        const command = args.shift().substring(config.commandPrefix.length);

        // Commands
        if (command === 'background' && helpers.isMod(msg)) new BackgroundColor(null, { input: { color: args[0] } }, { dataSources }).update();
      }
    });

    console.log(`[${new Date().toJSON()}] Listening: Twitch Chat at irc://irc.chat.twitch.tv:${clients.twitchBotChat.client.port}/`); // eslint-disable-line no-console
  } catch (error) {
    console.log(`[${new Date().toJSON()}] Listening Error: Twitch Chat`); // eslint-disable-line no-console
  }
};
