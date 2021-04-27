import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ROUTES_MAP from '../utils/routesMap';
import CURRENCY from '../utils/consts-currencies';

function App() {
  const [currentCurrency, setCurrentCurrency] = React.useState(CURRENCY.RUB);

  return (
    <Switch>
      <Route exact path={ROUTES_MAP.CONVERTER}>
        <div className="page">
          <Header />
          <Footer />
        </div>
      </Route>
      <Route exact path={ROUTES_MAP.MAIN}>
        <div className="page">
          <Header />
          <Main currency={currentCurrency} changeCurrency={setCurrentCurrency} />
          <Footer />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
