import Builtins from './builtins';

export default class Commands {
  static getMessageHandler(prefix = '!') {
    return message => {
      Builtins.getCommandParser(prefix)(message);
    };
  }
}
