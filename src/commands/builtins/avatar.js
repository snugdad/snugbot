import Command from '../command';

const avatar = new Command(
  'avatar',
  'Get the avatar URL of the tagged user(s), or your own avatar.',
  (message, args = []) => {
    if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ dynamic: true })}>`);
    }

    const avatarList = message.mentions.users.map(user => {
      return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;
    });

    message.channel.send(avatarList);
  });

export default avatar;
