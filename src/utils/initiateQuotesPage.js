import { useDispatch } from 'react-redux';
import defineCurrsForConversion from './defineCurrsForConversion';
import { quotesActions } from '../store/quotes/actions';
import currencyApi from './currencyAPI';

const initiateQuotesPage = async (activeCur) => {
  const dispatch = useDispatch();
  dispatch(quotesActions.setCurrentCur(activeCur));
  const currenciesForConversion = defineCurrsForConversion(activeCur);
  dispatch(quotesActions.setConverseCur(currenciesForConversion));
  const receivedQuotes = await currencyApi.getCurrency(activeCur, currenciesForConversion);
  dispatch(quotesActions.setQuotes(receivedQuotes));
};

export default initiateQuotesPage;
