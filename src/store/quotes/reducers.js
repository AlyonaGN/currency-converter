import { quotesActionTypes } from './actions';

const initialState = {
  currentCur: '',
  converseCurrs: [],
  quotes: {},
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case quotesActionTypes.SET_CURRENT_CUR:
      return { ...state, currentCur: action.payload };
    case quotesActionTypes.SET_CONVERSE_CURS:
      return { ...state, converseCurrs: action.payload };
    case quotesActionTypes.SET_QUOTES:
      return { ...state, quotes: action.payload };
    default:
      return state;
  }
};
export default quotesReducer;
