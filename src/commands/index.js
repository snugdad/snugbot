import { Collection } from 'discord.js';
import builtins from './builtins';

class Commands {
  constructor() {
    this.loadedCommands = [ ...builtins ];
  }


  addTo(client) {
    if(!Object.prototype.hasOwnProperty.call('commands')) {
      client.commands = new Collection();
    }
    
    this.loadedCommands.forEach(command => {
      console.log(`Setting command: ${command.name}`);
      client.commands.set(command.name, command);
    });

  }
}

const instance = new Commands();
Object.freeze(instance);

export default instance;

