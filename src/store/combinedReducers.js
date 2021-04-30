import { combineReducers } from 'redux';
import conversionReducer from './conversion/reducers';
import quotesReducer from './quotes/reducers';

const reducers = combineReducers({
  quotes: quotesReducer,
  conversion: conversionReducer,
});
export default reducers;
