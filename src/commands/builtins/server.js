import Command from '../command';

const server = new Command(
  'server',
  'Display info about this server.',
  (message, args = []) => message.channel.send(
    `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`));

export default server;