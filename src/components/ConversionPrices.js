import React from 'react';
import { Link } from 'react-router-dom';
import CURRENCY from '../utils/consts-currencies';
import PAGE_TITLES from '../utils/consts-titles';
import getKeyProp from '../utils/getKeyProp';
import ROUTES_MAP from '../utils/routesMap';

const ConversionPrices = ({ currentCurrency }) => {
  const [conversionCurrencies, setConversionCurrencies] = React.useState([]);

  React.useEffect(() => {
    setConversionCurrencies(Object.values(CURRENCY).filter((cur) => {
      return cur !== currentCurrency;
    }));
  }, []);
  return (
    <div className="content-container">
      {
        conversionCurrencies.map((conversCur, index) => {
          return (
            <span key={getKeyProp(index)} className="content-container__element content-container__conversion-price">
              1
              {' '}
              {CURRENCY[currentCurrency]}
              {' '}
              = 75.09
              {' '}
              {CURRENCY[conversCur]}
            </span>
          );
        })
    }
      <Link to={ROUTES_MAP.CONVERTER} className="content-container__element content-container__page-link">{PAGE_TITLES.CONVERTER}</Link>
    </div>
  );
};

export default ConversionPrices;
