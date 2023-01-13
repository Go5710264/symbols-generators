const archer = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}

const warrior = {
  name: 'Воин',
  type: 'Swordsman',
  health: 90,
  level: 1,
  attack: 25,
  defence: 50
}

const wizard = {
  name: 'Колдун',
  type: 'Magician',
  health: 30,
  level: 1,
  attack: 70,
  defence: 5
}

class Character {
  constructor(_, charInfo){
    this.name = charInfo.name,
    this.type = charInfo.type,
    this.health = charInfo.health,
    this.level = charInfo.level,
    this.attack = charInfo.attack,
    this.defence = charInfo.defence
  }
}

class Team {
  constructor(){
    this.groupMembers = {};
    this.index = 1;
  }
  
  addToGroup(newPlayer){
    this.groupMembers[this.index] = newPlayer;
    this.index++;
  }

  *[Symbol.iterator]() {
    const entries = Object.entries(this.groupMembers);
    for (let i = 0; i < entries.length; i++){
      yield entries[i]
    }
  }
  
}

const newGroup = new Team();

newGroup.addToGroup(archer);
newGroup.addToGroup(warrior);
newGroup.addToGroup(wizard);

for (let member of newGroup){
  console.log(new Character(...member));
}
