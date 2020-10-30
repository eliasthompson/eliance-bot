import BackgroundColor from '../services/backgroundColor.js';
import clients from '../clients/index.js';
import helpers from './helpers/index.js';
import rawDataSources from '../dataSources/index.js';

export default async () => {
  try {
    const dataSources = await helpers.initializeDataSources(rawDataSources);

    clients.twitchPubSub.client.onRedemption(22214120, ({ rewardName, message, userName }) => {
      console.log(`[${new Date().toJSON()}] ${userName} redeemed ${rewardName}`); // eslint-disable-line no-console

      // Redemptions
      if (rewardName === 'Change Background Color') new BackgroundColor(null, { input: { color: message } }, { dataSources }).update();
      else if (rewardName === 'Add Command') dataSources.twitchBotChat.say(`!addcommand ${message}`);
      else if (rewardName === 'Become VIP') dataSources.twitchChannelChat.addVip(userName);
    });

    console.log(`[${new Date().toJSON()}] Listening: Twitch PubSub at wss://pubsub-edge.twitch.tv:443/`); // eslint-disable-line no-console
  } catch (error) {
    console.log(`[${new Date().toJSON()}] Listening Error: Twitch PubSub`); // eslint-disable-line no-console
  }
};
