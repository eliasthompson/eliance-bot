import ObsDataSource from './obs.js';
import TwitchApiDataSource from './twitchApi.js';
import TwitchBotChatDataSource from './twitchBotChat.js';
import TwitchChannelChatDataSource from './twitchChannelChat.js';
import clients from '../clients/index.js';

export default () => ({
  obs: new ObsDataSource({ clients }),
  twitchApi: new TwitchApiDataSource({ clients }),
  twitchBotChat: new TwitchBotChatDataSource({ clients }),
  twitchChannelChat: new TwitchChannelChatDataSource({ clients }),
});
