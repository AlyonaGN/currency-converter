import { combineReducers } from 'redux';
import quotesReducer from './quotes/reducers';

const reducers = combineReducers({
  quotes: quotesReducer,
});
export default reducers;
