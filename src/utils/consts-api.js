const API_CONSTS = {
  BASE_URL: 'https://api.currencylayer.com/',
  /* при разработке приложения в production ключ не должен храниться в таком виде,
  а должен доставаться, например, из переменной окружения,
  а запрос к внешнему api - отправляться с бэка */
  KEY: 'df06ef415c5bb4a13f9ff3fb292bd6ff',
  CONVERSION_PRICE_ENDPOINT: 'live',
};

export default API_CONSTS;
