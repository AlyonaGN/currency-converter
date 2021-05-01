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
  test('It shoul return two strings with currencies and one int', () => {
    const input = '20 gbp RUB';
    const outputBaseCur = ('GBP');
    const outputConverseCur = ('RUB');
    const outputBaseSum = (20);
    const { baseCur, converseCur, baseSum } = parseInput(input);
    expect(outputBaseCur).toEqual(baseCur);
    expect(outputConverseCur).toEqual(converseCur);
    expect(outputBaseSum).toEqual(baseSum);
  });
});
