export default class Team {
  constructor() {
    this.groupMembers = {};
    this.index = 1;
  }

  addToGroup(newPlayer) {
    this.groupMembers[this.index] = newPlayer;
    this.index = +1;
  }

  * [Symbol.iterator]() {
    const entries = Object.entries(this.groupMembers);
    for (let i = 0; i < entries.length; i = +1) {
      yield entries[i];
    }
  }
}
