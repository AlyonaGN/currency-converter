import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import CURRENCY from '../utils/consts-currencies';
import getKeyProp from '../utils/getKeyProp';
import CurrencyButton from './CurrencyButton';
import { saveCurrencyInStorage } from '../utils/localStorageHandler';

const CurrencyOptions = ({ handleInitiation }) => {
  const quotesState = useSelector((st) => {
    return st.quotes;
  });
  const makeCurrencyActive = useCallback(async (e) => {
    const { currency } = e.target.dataset;
    handleInitiation(currency);
    saveCurrencyInStorage(currency);
  });
  return (
    <div className="content-container" onClick={makeCurrencyActive}>
      {Object.keys(CURRENCY).map((currency, index) => {
        const active = quotesState.currentCur === currency;
        return (
          <CurrencyButton
            key={getKeyProp(index)}
            text={CURRENCY[currency]}
            isActive={active}
          />
        );
      })}
    </div>
  );
};

export default CurrencyOptions;
