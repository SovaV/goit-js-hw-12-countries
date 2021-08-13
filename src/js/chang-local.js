// import error from './pnotify';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const debounce = require('lodash.debounce');

import countryCardTp from '../templates/country-card.hbs';
import API from './api';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 1000));

function clearInput() {
  // refs.searchForm.value = '';
  refs.cardCont.innerHTML = ''
  refs.inputText.innerHTML = ''
  refs.list.innerHTML = ''
}

function onSearch(e) {
  e.preventDefault(); //не перезагружається форма
  const searchQuery = e.target.value.trim();
  if (!searchQuery) {      
    return;
  }
  clearInput()
  API.fetchCountry(searchQuery) 
  .then(renderCountry)
  .catch(enterLetters)
}
function enterLetters(){
  clearInput();
  error ({
    title: 'УВАГА!',
    text: '← Введіть правильну назву країни',
    delay: 2000,
  }) 
 
}
function renderCountry(country) {
  const markup = countryCardTp(country);
  refs.cardCont.innerHTML = markup;

  if (country.length > 10) {
    clearInput()
    onFatchError()
  }
  if (country.length >= 2 && country.length <= 10) {
    clearInput()
    country.map(country => {
      refs.list.insertAdjacentHTML('beforeEnd',`<li>${country.name}</li>`)
  }); 
  }
}
function onFatchError() {
  error({
    title: 'УВАГА!',
    text: 'Укажіть більш точну назву країни',
    delay: 2000,
}); 
}



