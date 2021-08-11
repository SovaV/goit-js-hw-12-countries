export default class NewsApiService {
  constructor() {}
  fechArticle(name) {
    const BASE_URL = 'https://restcountries.eu/rest/v2';
    return fetch(`${BASE_URL}/name/${name}`).then(response => response.json());
  }
}
