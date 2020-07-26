import Command from '../command';

const help = new Command(
  'help',
  'List all of my commands or info about a specific command.',
  (message, args) => {
    const createCommandInfo = command => `${command.name} : ${command.description}`;
    const commandInformation = args.map(command => createCommandInfo(command)).join('\n');
    const helpMessage = ['Command info:', commandInformation].join('\n\n');

    return message.channel.send(helpMessage);
  });
export default help;