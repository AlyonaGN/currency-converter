describe('Parse function', () => {
  test('It shoul return two strings with currencies and one int', () => {
    const input = '30 ...#$% RUB in eur';
    const output = {'RUB', 'eur', 30};
  });
});
