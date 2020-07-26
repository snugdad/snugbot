export default class {
  constructor(name, description, callback) {
    this.name = name;
    this.description = description;
    this.execute = callback;
  }
}

