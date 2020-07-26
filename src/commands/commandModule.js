export default class {
  constructor(alias, commandTable) {
    this.alias = alias;
    this.commandTable = commandTable;
  }

  getCommandTableSetter() {
    return (key, value) => this.commandTable[key] = value;
  }

  getCommandNames() {
    return Object.keys(this.commandTable);
  }

  getCommand(commandName) {
    return this.commandTable[commandName];
  }

  getCommandList() {
    return Object.values(this.commandTable);
  }
}