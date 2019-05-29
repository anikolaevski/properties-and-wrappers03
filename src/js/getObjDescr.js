function getObjDescr(obj) {
  const charSigns = {
    Bowman: 0x1F620,
    Swordsman: 0x1F621,
    Magician: 0x1F9D0,
    Daemon: 0x1F47F,
    Undead: 0x1F480,
    Zombie: 0x1F9DF,
  };
  const attrSigns = {
    attack: 0x2694,
    defence: 0x1F6E1,
    health: 0x2764,
  };
  const {
    name,
    type,
    health,
    attack,
    defence,
  } = obj;

  const result = `${String.fromCodePoint(charSigns[type])} ${name[0]} `
  + `${String.fromCodePoint(attrSigns.attack)} ${attack} `
  + `${String.fromCodePoint(attrSigns.defence)} ${defence} `
  + `${String.fromCodePoint(attrSigns.health)} ${health} `;

  return result;
}

// eslint-disable-next-line import/prefer-default-export
export { getObjDescr };
