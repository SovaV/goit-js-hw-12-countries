import pokemonCardTp from '../templates/menu-card.hbs';
import API from './api';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault(); //не перезагружається форма

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery) // визиваєм fetchPokemon(функці) при сабміті форми, передаючи те що ми ввели в інпут
    .then(renderPocemon)
    .catch(onFatchError)
    .finally(() => form.reset());
}

function renderPocemon(pokemon) {
  const markup = pokemonCardTp(pokemon);
  refs.cardCont.innerHTML = markup;
}

function onFatchError(error) {
  alert('Шось пішло не так');
}

fetch('https://restcountries.eu/rest/v2/alpha/col', {
  headers: {},
})
  .then(r => r.json())
  .then(console.log);
