import CURRENCY from './consts-currencies';

/* Для того, чтобы распарсить ввод,
который мог содержать незначительные неточности и лишние символы,
выясняю какая валюта является исходной, а какая - валютой конвертации через
индекс вхождения в строку инпута. Если индекс -1, то он не попадает в объект с индексами
(валюта не упомянута в вводе).
Таким образом в объекте с индексами окажется два свойства с ключом в виде числа,
отражающего индекс начала вхождения в инпут и значением - именем валюты.
JS обеспечивает хранение свойств с ключами-числами в порядке возрастания
и соблюдение этого порядка при вызове Object.keys(obj), что можно удобно использовать.
Предшествующая этому обработчику валидация обеспечивает,
что в инпуте упоминается именно две валюты. */
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
};

export default parseInput;
