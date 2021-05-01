/* const CURRENCY = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
};

const parseInput = (input) => {
  const indexes = {};
  const upperCasedInput = input.toUpperCase();
  Object.keys(CURRENCY).forEach((cur) => {
    const idexOfCurInInput = upperCasedInput.indexOf(cur);
    if (idexOfCurInInput !== -1) {
      indexes[idexOfCurInInput] = cur;
    }
  });
  const orderedIndexes = Object.keys(indexes);
  const baseCur = indexes[orderedIndexes[0]];
  const converseCur = indexes[orderedIndexes[1]];
  const baseSum = parseInt(input, 10);
  return { baseCur, converseCur, baseSum };
}; */

import parseInput from '../utils/parseInput';

describe('Parse function', () => {
  test('It shoul return two strings with currencies and one int', () => {
    const input = '30 ...#$% RUB in eur';
    const outputBaseCur = ('RUB');
    const outputConverseCur = ('EUR');
    const outputBaseSum = (30);
    const { baseCur, converseCur, baseSum } = parseInput(input);
    expect(outputBaseCur).toEqual(baseCur);
    expect(outputConverseCur).toEqual(converseCur);
    expect(outputBaseSum).toEqual(baseSum);
  });
});
