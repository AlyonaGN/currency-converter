import React from 'react';
import CURRENCY from '../utils/consts-currencies';
import getKeyProp from '../utils/getKeyProp';

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
            <span key={getKeyProp(index)} className="content-container__conversion-price">
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
    </div>
  );
};

export default ConversionPrices;
