import React, { useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ROUTES_MAP from '../utils/routesMap';
import CURRENCY from '../utils/consts-currencies';
import Converter from './Converter';
import currencyApi from '../utils/currencyAPI';
import store from '../store';

const App = () => {
  const [baseCurrencyFromInput, setBaseCurrencyFromInput] = React.useState('');
  const [converseCurrencyFromInput, setConverseCurrencyFromInput] = React.useState('');
  const [areConversionResultsOpen, setConversionResultsOpen] = React.useState(false);
  const [baseSumFromInput, setBaseSumFromInput] = React.useState('');
  const [convertedSum, setConvertedSum] = React.useState('');

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
  const parseInput = useCallback((input) => {
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
  });

  const convertSum = useCallback((sum, quote) => {
    return sum * quote;
  });

  const handleConverseClick = useCallback(async (input) => {
    const { baseCur, converseCur, baseSum } = parseInput(input);
    setBaseCurrencyFromInput(baseCur);
    setConverseCurrencyFromInput(converseCur);
    setBaseSumFromInput(baseSum);
    const resQuote = await currencyApi
      .getCurrency(baseCur, [converseCur]);
    const resSum = convertSum(baseSum, resQuote[converseCur]);
    setConvertedSum(resSum);
    setConversionResultsOpen(true);
  });

  return (
    <Provider store={store}>
      <div className="page">
        <Header />
        <Switch>
          <Route exact path={ROUTES_MAP.CONVERTER}>
            <Converter
              onConverse={handleConverseClick}
              conversionResultsOpen={areConversionResultsOpen}
              baseSum={baseSumFromInput}
              baseCur={baseCurrencyFromInput}
              resSum={convertedSum}
              resCur={converseCurrencyFromInput}
            />
          </Route>
          <Route exact path={ROUTES_MAP.MAIN}>
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
