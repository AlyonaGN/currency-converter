import React from 'react';
import CurrencyOptions from './CurrencyOptions';
import ConversionPrices from './ConversionPrices';

const Main = ({ currency }) => {
  return (
    <div className="page__main">
      <CurrencyOptions />
      <ConversionPrices currentCurrency={currency} />
    </div>
  );
};

export default Main;
