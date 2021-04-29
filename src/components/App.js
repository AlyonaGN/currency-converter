import React, { useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ROUTES_MAP from '../utils/routesMap';
import CURRENCY from '../utils/consts-currencies';
import Converter from './Converter';
import { getCurrencyFromStorage, saveCurrencyInStorage } from '../utils/localStorageHandler';
import currencyApi from '../utils/currencyAPI';

const App = () => {
  const [currentCurrency, setCurrentCurrency] = React.useState('');
  const [conversionCurrencies, setConversionCurrencies] = React.useState([]);
  const [quotes, setQuotes] = React.useState({});
  const [baseCurrencyFromInput, setBaseCurrencyFromInput] = React.useState('');
  const [converseCurrencyFromInput, setConverseCurrencyFromInput] = React.useState('');
  const [areConversionResultsOpen, setConversionResultsOpen] = React.useState(false);
  const [baseSumFromInput, setBaseSumFromInput] = React.useState('');
  const [convertedSum, setConvertedSum] = React.useState('');

  const makeCurrencyActive = useCallback(async (e) => {
    const { currency } = e.target.dataset;
    setCurrentCurrency(currency);
    saveCurrencyInStorage(currency);
    const currenciesForConversion = Object.values(CURRENCY).filter((cur) => {
      return cur !== currency;
    });
    setConversionCurrencies(currenciesForConversion);
    const receivedQuotes = await
    currencyApi.getCurrency(currency, currenciesForConversion);
    setQuotes(receivedQuotes);
  }, []);

  const handleConverseClick = useCallback(async (input) => {
    const indexes = {};
    /* Для того, чтобы распарсить ввод,
    который мог содержать незначительные неточности и лишние символы,
    выясняю какая валюта является исходной, а какая - валютой конвертации через
    индекс вхождения в строку инпута. Если индекс -1, то он не попадает в объект с индексами,
    таким образом в объекте окажется два свойства с ключом в виде числа, отражающего индекс
    начала вхождения в инпут и значением - именем валюты. JS обеспечивает хранение свойств
    с ключами-числами в порядке возрастания, что можно удобно использовать.
    Предшествующая валидация должна обеспечить, что в инпуте упоминается именно две валюты. */
    Object.keys(CURRENCY).forEach((cur) => {
      const idexOfCurInInput = input.toUpperCase().indexOf(cur);
      if (idexOfCurInInput !== -1) {
        indexes[idexOfCurInInput] = cur;
      }
    });
    const orderedIndexes = Object.keys(indexes);
    const baseCur = indexes[orderedIndexes[0]];
    const converseCur = indexes[orderedIndexes[1]];
    setBaseCurrencyFromInput(baseCur);
    setConverseCurrencyFromInput(converseCur);
    const baseSum = parseInt(input, 10);
    setBaseSumFromInput(baseSum);
    const resQuote = await currencyApi
      .getCurrency(baseCur, [converseCur]);
    const resSum = resQuote[converseCur] * baseSum;
    setConvertedSum(resSum);
    setConversionResultsOpen(true);
  });

  React.useEffect(async () => {
    const curFromStorage = getCurrencyFromStorage();
    if (curFromStorage) {
      setCurrentCurrency(curFromStorage);
      const currenciesForConversion = Object.values(CURRENCY).filter((cur) => {
        return cur !== curFromStorage;
      });
      setConversionCurrencies(currenciesForConversion);
      const receivedQuotes = await currencyApi.getCurrency(curFromStorage, currenciesForConversion);
      setQuotes(receivedQuotes);
    } else {
      setCurrentCurrency(CURRENCY.RUB);
      const currenciesForConversion = Object.values(CURRENCY).filter((cur) => {
        return cur !== CURRENCY.RUB;
      });
      setConversionCurrencies(currenciesForConversion);
      const receivedQuotes = await currencyApi.getCurrency(CURRENCY.RUB, currenciesForConversion);
      setQuotes(receivedQuotes);
    }
  }, []);

  return (
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
          <Main
            currency={currentCurrency}
            conversionCurrs={conversionCurrencies}
            currencyQuotes={quotes}
            makeCurrActive={makeCurrencyActive}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
