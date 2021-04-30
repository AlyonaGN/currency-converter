import { conversionActionTypes } from './actions';

const initialState = {
  areResultsOpen: false,
  inputSum: '',
  inputBase: '',
  convertedSum: '',
  converseCur: '',
};

const conversionReducer = (state = initialState, action) => {
  switch (action.type) {
    case conversionActionTypes.SET_RESULTS_OPEN:
      return { ...state, areResultsOpen: action.payload };
    case conversionActionTypes.SET_INPUT_SUM:
      return { ...state, inputSum: action.payload };
    case conversionActionTypes.SET_INPUT_BASE:
      return { ...state, inputBase: action.payload };
    case conversionActionTypes.SET_CONVERTED_SUM:
      return { ...state, convertedSum: action.payload };
    case conversionActionTypes.SET_CONVERSE_CUR:
      return { ...state, converseCur: action.payload };
    default:
      return state;
  }
};
export default conversionReducer;
