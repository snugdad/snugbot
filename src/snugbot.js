import Commands from './commands';
import Reactions from './reactions';
import { Client, Collection } from 'discord.js';

const commandPrefix = '!';
const discordClient = new Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const cooldowns = new Collection();


// main singleton class definition
class SnugBot {
  constructor() {
    this.initializeFeatures();
  }

  initializeFeatures() {
    Reactions.addTo(discordClient);
    Commands.addTo(discordClient);
  }

  onConnectToDiscord() {
    discordClient.once('ready', () => console.log('[SnugBot]Connected!'));
    discordClient.on('message', this.handleMessages);
  }


  handleMessages(message) {
    console.log(`${commandPrefix}`);
    if (!message.content.startsWith(commandPrefix) || message.author.bot) return;

    const args = message.content.slice(commandPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = discordClient.commands.get(commandName)
      || discordClient.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text') {
      return message.reply('I can\'t execute that command inside DMs!');
    }

    if (command.args && !args.length) {
      let reply = `You didn't provide any arguments, ${message.author}!`;

      if (command.usage) {
        reply += `\nThe proper usage would be: \`${commandPrefix}${command.name} ${command.usage}\``;
      }

      return message.channel.send(reply);
    }

    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
      }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
      command.execute(message, args);
    }
    catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
  }


  connectToDiscord(clientKey) {
    this.onConnectToDiscord();
    discordClient.login(clientKey);
  }

}

const instance = new SnugBot();
Object.freeze(instance);

export default instance;