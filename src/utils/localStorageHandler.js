const CURRENCY_KEY = 'currency';

export const saveCurrencyInStorage = (currentCurrency) => {
  localStorage.setItem(CURRENCY_KEY, currentCurrency);
};

export const getCurrencyFromStorage = () => {
  return localStorage.getItem(CURRENCY_KEY);
};
