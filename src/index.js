import authProviders from './authProviders/index.js';
import clients from './clients/index.js';
import listeners from './listeners/index.js';

(async () => {
  try {
    await Promise.all(Object.values(authProviders).map(authProvider => authProvider.initialize()));
    await Promise.all([
      clients.obs.initialize(),
      clients.twitchApi.initialize(authProviders.twitchChannel.auth),
      clients.twitchBotChat.initialize(authProviders.twitchBot.auth),
      clients.twitchChannelChat.initialize(authProviders.twitchChannel.auth),
    ]);
    await clients.twitchPubSub.initialize(clients.twitchApi.client);
    await Promise.all(Object.values(listeners).map(listener => listener()));
  } catch (error) {
    // process.exit(1);
  }
})();
