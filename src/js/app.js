/* eslint-disable no-console */
// TODO: write code here
import { getObjDescr } from './getObjDescr';

console.log('app.js bundled');

const obj = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

console.log('Исходный объект:', obj);
const result = getObjDescr(obj);
console.log('Результат извлечения:', result.replace(/\s/g, ''));
