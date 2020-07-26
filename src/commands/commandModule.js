export default class {
  constructor(alias, commandTable) {
    this.alias = alias;
    this.commandTable = commandTable;
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