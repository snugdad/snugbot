import CommandModule from '../commandModule';
import ArgsInfo from './args-info';
import Avatar from './avatar';
import Beep from './beep';
import Help from './help';
import Kick from './kick';
import Prune from './prune';
import Server from './server';
import SetAlias from './set-alias';
import UserInfo from './user-info';

const builtins = new CommandModule(
  'builtins', {
    [`${Help.name}`]: Help,
    [`${ArgsInfo.name}`]: ArgsInfo,
    [`${Avatar.name}`]: Avatar,
    [`${Beep.name}`]: Beep,
    [`${Kick.name}`]: Kick,
    [`${Prune.name}`]: Prune,
    [`${Server.name}`]: Server,
    [`${SetAlias.name}`]: SetAlias,
    [`${UserInfo.name}`]: UserInfo,
  });

const commandParser = prefix => message => {
  const args = message.content.slice(prefix.length).trim().split(' ');
  const commandName = args[0];
  if (builtins.commandTable[commandName]) {
    const commandArgs =
      commandName === Help.name ? builtins.getCommandList() :
        commandName === SetAlias.name ? [builtins.getCommandTableSetter(), builtins.getCommandList()] :
          args.length > 1 ? [...args[1]] : args;
    return builtins.getCommand(commandName).execute(message, commandArgs);
  }
};

export default class {
  static getCommandParser(prefix) {
    return commandParser(prefix);
  }
}
