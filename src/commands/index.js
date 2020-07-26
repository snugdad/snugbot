import Builtins from './builtins';

export default class Commands {
  static addBuiltins(discordBot, prefix = '!', commands = ['args-info', 'help']) {
    commands.forEach(commandName => {
      discordBot.commands.set(commandName, Builtins.getCommand(commandName));
    });
    return Builtins.getCommandParser(prefix);
  }
}
