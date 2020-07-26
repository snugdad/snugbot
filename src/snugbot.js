import Commands from './commands';
import { Client, Collection } from 'discord.js';

// create bot instance
const botInstance = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'], commands: new Collection() });
botInstance.commands = new Collection();

// get handler from command module
const messageHandler = Commands.getMessageHandler();

// set ready trigger
botInstance.once('ready', () => console.log('[SnugBot]Connected!'));

// use messageHandler in bot main listener
botInstance.on('message', (message) => {
  if (message.author.id === botInstance.user.id) return;
  messageHandler(message);
});

// snugbot main driver
export default class SnugBot {
  static connectToDiscord(clientKey) {
    botInstance.login(clientKey);
  }
}
