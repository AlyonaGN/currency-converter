import API_CONSTS from './consts-api';

class CurrencyAPI {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getCurrency(baseCurrency, conversionCurrencies) {
    /* при разработке приложения в production ключ не может передаваться в таком виде,
    а должен доставаться, например, из переменной окружения,
    в то время как этот запрос к внешнему api - отправляться с бэка */
    return fetch(`${API_CONSTS.BASE_URL}${API_CONSTS.CONVERSION_PRICE_ENDPOINT}?access_key=${API_CONSTS.KEY}&source=${baseCurrency}&currencies=${conversionCurrencies.join(',')}&format=1`)
      .then(async (res) => {
        const results = await CurrencyAPI._getResponseData(res);
        return CurrencyAPI._formatResponse(results.quotes, conversionCurrencies, baseCurrency);
      })
      .catch((err) => {
        return Promise.reject(new Error(`Ошибка: ${err.message ? err.message : API_CONSTS.ERROR}`));
      });
  }

  static _formatResponse(results, conversionCurrencies, base) {
    const quotes = {};
    conversionCurrencies.forEach((conversCur) => {
      quotes[conversCur] = results[`${base}${conversCur}`];
    });
    return quotes;
  }

  static _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
}

const currencyApi = new CurrencyAPI({
  baseUrl: API_CONSTS.BASE_URL,
});

export default currencyApi;
