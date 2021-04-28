import React from 'react';
import CurrencyOptions from './CurrencyOptions';
import ConversionPrices from './ConversionPrices';

const Main = ({
  currency,
  conversionCurrs,
  currencyQuotes,
  makeCurrActive,
}) => {
  return (
    <div className="page__main">
      <CurrencyOptions currentCurrency={currency} makeCurrencyActive={makeCurrActive} />
      <ConversionPrices
        currentCurrency={currency}
        conversionCurrencies={conversionCurrs}
        quotes={currencyQuotes}
      />
    </div>
  );
};

export default Main;
