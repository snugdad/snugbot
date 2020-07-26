import Command from '../command';

const userInfo = new Command(
  'user-info',
  'Display user info about yourself.',
  (message, args = []) => message.channel.send(
    `Your username: ${message.author.username}\nYour ID: ${message.author.id}`));

export default userInfo;