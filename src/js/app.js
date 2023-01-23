import Character from './Character';
import { archer, warrior, wizard } from './members';
import Team from './Team';

const newGroup = new Team();

newGroup.addToGroup(archer);
newGroup.addToGroup(warrior);
newGroup.addToGroup(wizard);

const party = [];

for (const member of newGroup) {
  party.push(new Character(...member));
}
