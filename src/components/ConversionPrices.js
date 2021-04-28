import React from 'react';
import { Link } from 'react-router-dom';
import CURRENCY from '../utils/consts-currencies';
import PAGE_TITLES from '../utils/consts-titles';
import getKeyProp from '../utils/getKeyProp';
import ROUTES_MAP from '../utils/routesMap';

const ConversionPrices = ({ currentCurrency, conversionCurrencies, quotes }) => {
  React.useEffect(() => {
    console.log(currentCurrency, conversionCurrencies, quotes);
  }, [currentCurrency, conversionCurrencies, quotes]);

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
              =
              {' '}
              {quotes[conversCur]}
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
