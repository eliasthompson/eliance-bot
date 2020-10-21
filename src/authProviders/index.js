import TwitchBotAuthProvider from './twitchBot.js';
import TwitchChannelAuthProvider from './twitchChannel.js';

export default {
  twitchBot: new TwitchBotAuthProvider(),
  twitchChannel: new TwitchChannelAuthProvider(),
};
