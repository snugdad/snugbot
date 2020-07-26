import messageReactionAdd from './messageReactionAdd';

class Reactions {
  constructor() {
    this.registeredHandlers = [ messageReactionAdd ];
  }

  addTo(client) {
    if (client && client.on !== undefined) {
      this.registeredHandlers.forEach(h => client.on(h.name, h.handler));
    }
  }
}

const instance = new Reactions();
Object.freeze(instance);

export default instance;