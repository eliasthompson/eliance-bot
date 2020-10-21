import ObsClient from './obs.js';
import TwitchApiClient from './twitchApi.js';
import TwitchBotChatClient from './twitchBotChat.js';
import TwitchChannelChatClient from './twitchChannelChat.js';
import TwitchPubSubClient from './twitchPubSub.js';

export default {
  obs: new ObsClient(),
  twitchApi: new TwitchApiClient(),
  twitchBotChat: new TwitchBotChatClient(),
  twitchChannelChat: new TwitchChannelChatClient(),
  twitchPubSub: new TwitchPubSubClient(),
};
