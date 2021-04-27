import React from 'react';
import CURRENCY from '../utils/consts-currencies';
import getKeyProp from '../utils/getKeyProp';
import CurrencyButton from './CurrencyButton';

const CurrencyOptions = () => {
  const [currencyOptions, setCurrencyOptions] = React.useState([]);

  React.useEffect(() => {
    setCurrencyOptions(Object.keys(CURRENCY));
  }, []);

  return (
    <div className="content-container">
      {currencyOptions.map((currency, index) => {
        return <CurrencyButton key={getKeyProp(index)} text={CURRENCY[currency]} />;
      })}
    </div>
  );
};

export default CurrencyOptions;
