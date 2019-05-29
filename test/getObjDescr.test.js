import { getObjDescr } from '../src/js/getObjDescr';

test('Test Bowman', () => {
  const sourceData = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const res = getObjDescr(sourceData);

  const result = [];
  res.split(' ').forEach(char => result.push(char));
  result.splice(8);

  const expected = [
    String.fromCodePoint(0x1F620),
    'Л',
    String.fromCodePoint(0x2694),
    '40',
    String.fromCodePoint(0x1F6E1),
    '10',
    String.fromCodePoint(0x2764),
    '50',
  ];

  expect(result).toEqual(expected);
});
