import React from 'react';
import CURRENCY from '../utils/consts-currencies';
import getKeyProp from '../utils/getKeyProp';
import CurrencyButton from './CurrencyButton';

const CurrencyOptions = ({ currentCurrency, makeCurrencyActive }) => {
  const [currencyOptions, setCurrencyOptions] = React.useState([]);

  React.useEffect(() => {
    setCurrencyOptions(Object.keys(CURRENCY));
  }, []);

  return (
    <div className="content-container" onClick={makeCurrencyActive}>
      {currencyOptions.map((currency, index) => {
        const active = currentCurrency === currency;
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
