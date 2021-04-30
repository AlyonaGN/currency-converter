import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CURRENCY from '../utils/consts-currencies';
import PAGE_TITLES from '../utils/consts-titles';
import getKeyProp from '../utils/getKeyProp';
import ROUTES_MAP from '../utils/routesMap';
import { getCurrencyFromStorage } from '../utils/localStorageHandler';

const ConversionPrices = ({ handleInitiation }) => {
  const quotesState = useSelector((st) => {
    return st.quotes;
  });

  React.useEffect(async () => {
    const curFromStorage = getCurrencyFromStorage();
    if (curFromStorage) {
      handleInitiation(curFromStorage);
    } else {
      handleInitiation(CURRENCY.RUB);
    }
  }, []);
  console.log(quotesState);
  return (
    <div className="content-container">
      {
        quotesState.converseCurrs.map((conversCur, index) => {
          return (
            <span key={getKeyProp(index)} className="content-container__element content-container__conversion-price">
              1
              {' '}
              {CURRENCY[quotesState.currentCur]}
              {' '}
              =
              {' '}
              {quotesState.quotes[conversCur]}
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
