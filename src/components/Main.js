import React from 'react';
import CurrencyOptions from './CurrencyOptions';
import ConversionPrices from './ConversionPrices';

const Main = ({ currency }) => {
  return (
    <div className="page__main">
      <CurrencyOptions currentCurrency={currency} />
      <ConversionPrices currentCurrency={currency} />
    </div>
  );
};

export default Main;
