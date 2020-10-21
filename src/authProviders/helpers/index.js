import { RefreshableAuthProvider, StaticAuthProvider } from 'twitch-auth';

import config from '../../../config/index.js';

export default {
  getTwitchAuthProvider(accessToken, refreshToken, onRefresh = () => {}) {
    const childProvider = new StaticAuthProvider(config.twitch.clientId, accessToken);
    return new RefreshableAuthProvider(childProvider, {
      clientSecret: config.twitch.clientSecret,
      onRefresh,
      refreshToken,
    });
  },
};
