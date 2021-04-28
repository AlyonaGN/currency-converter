import API_CONSTS from './consts-api';

class CurrencyAPI {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getCurrency(keyWord, fromDate, toDate) {
    return fetch(`${this.baseUrl}&q=${keyWord}&from=${fromDate}&to=${toDate}&pageSize=${100}`, {
      method: 'GET',
    })
      .then(async (res) => {
        const results = await CurrencyAPI._getResponseData(res);
        return CurrencyAPI._formatNews(results.articles, keyWord);
      });
  }

  static _formatNews(results, keyWord) {
    const formattedCards = [];
    results.forEach((article) => {
      const formattedArticle = {
        date: '', image: '', keyword: keyWord, link: '', source: '', text: '', title: '',
      };
      formattedArticle.date = article.publishedAt;
      formattedArticle.image = article.urlToImage;
      formattedArticle.link = article.url;
      formattedArticle.source = article.source.name;
      formattedArticle.text = article.content;
      formattedArticle.title = article.title;
      formattedCards.push(formattedArticle);
    });
    return formattedCards;
  }

  static _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}, ${res.message}`));
  }
}

const currencyApi = new CurrencyAPI({
  baseUrl: API_CONSTS.BASE_URL,
});

export default currencyApi;
