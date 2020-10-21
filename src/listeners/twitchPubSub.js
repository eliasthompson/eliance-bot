import BackgroundColor from '../services/backgroundColor.js';
import clients from '../clients/index.js';
import dataSources from '../dataSources/index.js';
import helpers from './helpers/index.js';

export default async () => {
  try {
    const initializedDataSources = await helpers.initializeDataSources(dataSources);

    clients.twitchPubSub.client.onRedemption(22214120, ({ rewardName, message, userName }) => {
      console.log(`[${new Date().toJSON()}] ${userName} redeemed ${rewardName}`); // eslint-disable-line no-console

      // Redemptions
      if (rewardName === 'Change Background Color') new BackgroundColor(null, { input: { color: message } }, { dataSources: initializedDataSources }).update();
      else if (rewardName === 'Add Command') initializedDataSources.twitchBotChat.say(`!addcommand ${message}`);
      else if (rewardName === 'Become VIP') initializedDataSources.twitchChannelChat.addVip(userName);
    });

    console.log(`[${new Date().toJSON()}] Listening: Twtich PubSub at wss://pubsub-edge.twitch.tv:443/`); // eslint-disable-line no-console
  } catch (error) {
    console.log(`[${new Date().toJSON()}] Listening Error: Twtich PubSub`); // eslint-disable-line no-console
  }
};
