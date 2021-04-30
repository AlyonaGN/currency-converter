export const conversionActionTypes = {
  SET_RESULTS_OPEN: 'CONVERSE.SET_RESULTS_OPEN',
  SET_INPUT_SUM: 'CONVERSE.SET_INPUT_SUM',
  SET_INPUT_BASE: 'CONVERSE.SET_INPUT_BASE',
  SET_CONVERTED_SUM: 'CONVERSE.SET_CONVERTED_SUM',
  SET_CONVERSE_CUR: 'CONVERSE.SET_CONVERSE_CUR',
};

export const conversionActions = {
  setResultsOpen: (payload) => {
    return ({ type: conversionActionTypes.SET_RESULTS_OPEN, payload });
  },
  setInputSum: (payload) => {
    return ({ type: conversionActionTypes.SET_INPUT_SUM, payload });
  },
  setInputBase: (payload) => {
    return ({ type: conversionActionTypes.SET_INPUT_BASE, payload });
  },
  setConvertedSum: (payload) => {
    return ({ type: conversionActionTypes.SET_CONVERTED_SUM, payload });
  },
  setConverseCur: (payload) => {
    return ({ type: conversionActionTypes.SET_CONVERSE_CUR, payload });
  },
};
