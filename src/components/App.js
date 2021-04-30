import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ROUTES_MAP from '../utils/routesMap';
import Converter from './Converter';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <Header />
        <Switch>
          <Route exact path={ROUTES_MAP.CONVERTER}>
            <Converter />
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
