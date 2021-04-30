import React from 'react';
import { useDispatch } from 'react-redux';
import CurrencyOptions from './CurrencyOptions';
import ConversionPrices from './ConversionPrices';
import defineCurrsForConversion from '../utils/defineCurrsForConversion';
import { quotesActions } from '../store/quotes/actions';
import currencyApi from '../utils/currencyAPI';

const Main = () => {
  const dispatch = useDispatch();

  const initiateQuotesPage = async (activeCur) => {
    dispatch(quotesActions.setCurrentCur(activeCur));
    const currenciesForConversion = defineCurrsForConversion(activeCur);
    dispatch(quotesActions.setConverseCur(currenciesForConversion));
    const receivedQuotes = await currencyApi.getCurrency(activeCur, currenciesForConversion);
    dispatch(quotesActions.setQuotes(receivedQuotes));
  };
  return (
    <div className="page__main">
      <CurrencyOptions handleInitiation={initiateQuotesPage} />
      <ConversionPrices handleInitiation={initiateQuotesPage} />
    </div>
  );
};

export default Main;
