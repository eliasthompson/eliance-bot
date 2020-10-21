export default {
  commandPrefix: '!',
  obs: {
    address: process.env.OBS_ADDRESS,
    password: process.env.OBS_PASSWORD,
  },
  twitch: {
    channel: process.env.TWITCH_CHAT_CHANNEL,
    clientId: process.env.TWITCH_APPLICATION_CLIENT_ID,
    clientSecret: process.env.TWITCH_APPLICATION_CLIENT_SECRET,
  },
};
