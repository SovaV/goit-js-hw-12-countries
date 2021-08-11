const debounce = require('lodash.debounce');

import countryCardTp from '../templates/menu-card.hbs';
import API from './api';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 1000));

function onSearch(e) {
  e.preventDefault(); //не перезагружається форма

  const form = e.target;
  const searchQuery = form.value;

  API.fetchCountry(searchQuery) // визиваєм fetchCountry(функці) при сабміті форми, передаючи те що ми ввели в інпут
    .then(renderCountry)
    .catch(onFatchError)
    .finally(() => clearInput());
}

function renderCountry(country) {
  const markup = countryCardTp(country);
  refs.cardCont.innerHTML = markup;
}

function clearInput() {
  refs.searchForm.value = '';
}

function onFatchError(error) {
  alert('Шось пішло не так');
}

fetch('https://restcountries.eu/rest/v2/alpha/col', {
  headers: {},
})
  .then(r => r.json())
  .then(console.log);
