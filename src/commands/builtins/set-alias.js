import Command from '../Command';

const setAlias = new Command(
  'set-alias',
  'Sets the name of a command to a different alias',
  (message, [setCommand, commands]) => {
    const cliArgs = message.content.trim().split(' ');
    if (cliArgs.length > 2) {
      message.channel.send(`Setting command ${cliArgs[1]} alias to ${cliArgs[2]}`);
      const command = commands.find(c => c.name === cliArgs[1]);
      setCommand(cliArgs[2], command);
      message.channel.send(`New alias for ${command.name} was set successfully`);
    }
  });

export default setAlias;