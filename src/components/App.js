import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ROUTES_MAP from '../utils/routesMap';
import CURRENCY from '../utils/consts-currencies';
import Converter from './Converter';
import { getCurrencyFromStorage } from '../utils/localStorageHandler';
import currencyApi from '../utils/currencyAPI';

const App = () => {
  const [currentCurrency, setCurrentCurrency] = React.useState('');

  React.useEffect(() => {
    const curFromStorage = getCurrencyFromStorage();
    if (curFromStorage) {
      setCurrentCurrency(curFromStorage);
    } else {
      setCurrentCurrency(CURRENCY.RUB);
    }
    console.log(currencyApi.getCurrency());
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
          <Main currency={currentCurrency} />
          <Footer />
        </div>
      </Route>
    </Switch>
  );
};

export default App;
