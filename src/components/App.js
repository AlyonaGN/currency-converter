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

  const makeCurrencyActive = useCallback(async (e) => {
    setCurrentCurrency(e.target.innerHTML);
    saveCurrencyInStorage(e.target.innerHTML);
    const currenciesForConversion = Object.values(CURRENCY).filter((cur) => {
      return cur !== e.target.innerHTML;
    });
    setConversionCurrencies(currenciesForConversion);
    const receivedQuotes = await
    currencyApi.getCurrency(e.target.innerHTML, currenciesForConversion);
    setQuotes(receivedQuotes);
  }, []);

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
    <Switch>
      <Route exact path={ROUTES_MAP.CONVERTER}>
        <div className="page">
          <Header />
          <Converter />
          <Footer />
        </div>
      </Route>
      <Route exact path={ROUTES_MAP.MAIN}>
        <div className="page">
          <Header />
          <Main
            currency={currentCurrency}
            conversionCurrs={conversionCurrencies}
            currencyQuotes={quotes}
            makeCurrActive={makeCurrencyActive}
          />
          <Footer />
        </div>
      </Route>
    </Switch>
  );
};

export default App;
