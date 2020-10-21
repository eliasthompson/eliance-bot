> Note: This app is still very much WIP and some poorly abstracted and hardcoded functions and values still exist.
>
> Known Issues: Token refresh race condition. (Workaround: Comment root process exit, run the app, let it refresh, and then restart.)

# Eliance Bot
A Twitch bot application that runs an Apollo Server based GraphQL server and connects to and listens for Twitch Chat and PubSub events.

## Development
Development of this app requires Node 14 and a basic knowledge of Apollo Server GraphQL best practices and a working knowledge of the Twitch & OBS Studio Websocket APIs. To start the app in dev mode, run:
`npm start`

## ENV Vars
| ENV Var | Description |
| --- | --- |
| `OBS_ADDRESS` | OBS Websocket address. Usually `localhost:4444`. |
| `OBS_PASSWORD` | You OBS Websocket password, if any. |
| `OBS_SOURCE_BACKGROUND` | The name of the source you're changing filters on for the background color service. |
| `TWITCH_APPLICATION_CLIENT_ID` | Your Twitch application client id, registered on the Twitch Dev Console. |
| `TWITCH_APPLICATION_CLIENT_SECRET` | Your Twitch application client secret, found on the Twitch Dev Console. |
| `TWITCH_CHAT_CHANNEL` | The Twitch channel you want to connect your bot to. |

## Token Storage
Until I implement a database solution, Twitch API tokens are stored in a `tokens.json` file in the app root. Please follow the [Twitch OAuth Authorization Code Flow](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth#oauth-authorization-code-flow) to authorize both your main channel and your bot channel and get access tokens and refresh tokens for each with the scopes you want. Add them into the `tokens.json` in the below format, and the app should take care automatically refreshing the tokens while the app is running.
