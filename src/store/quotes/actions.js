export const quotesActionTypes = {
  SET_CURRENT_CUR: 'QUOTE.SET_CURRENT_CUE',
  SET_CONVERSE_CURS: 'QUOTE.SET_CONVERSE_CUR',
  SET_QUOTES: 'QUOTE.SET_QUOTES',
};

export const quotesActions = {
  setCurrentCur: (payload) => {
    return ({ type: quotesActionTypes.SET_CURRENT_CUR, payload });
  },
  setConverseCur: (payload) => {
    return ({ type: quotesActionTypes.SET_CONVERSE_CURS, payload });
  },
  setQuotes: (payload) => {
    return ({ type: quotesActionTypes.SET_QUOTES, payload });
  },
};
