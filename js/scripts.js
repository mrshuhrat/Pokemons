var elPokemonsWrapper = document.querySelector('.js-pokemons-wrapper');
var elButton = document.querySelector('.js-button');
var form = document.querySelector('.form');
var typeSelect = document.querySelector('.type');

var createElementHtml = function (array) {
  // for (var i = 0; i < pokemons.length; i++)
array.forEach(function (pokemon) {
  
  var elNewDiv = createElement('div', 'pokemon');
  /* var elNewDiv = document.createElement('div');
  elNewDiv.classList.add('pokemon'); */

  var elNewImg = createElement('img', 'pokemon__img');
  elNewImg.src =pokemon.img;
  /* var elNewImg = document.createElement('img');
  elNewImg.classList.add('pokemon__img'); */

  var elNewHeading = createElement('h3', 'pokemon__name', pokemon.name);
  /* var elNewHeading = document.createElement('h3');
  elNewHeading.classList.add('pokemon__name');
  elNewHeading.textContent = pokemons[i].name; */

  var elNewParagraph = createElement('p', 'pokemon__type', pokemon.type);
  /* var elNewParagraph = document.createElement('p');
  elNewParagraph.classList.add('pokemon__type');
  elNewParagraph.textContent = pokemons[i].type; */

  var elNewSpan = createElement('span', 'pokemon__type', pokemon.weaknesses);

  elPokemonsWrapper.appendChild(elNewDiv);
  elNewDiv.appendChild(elNewImg);
  elNewDiv.appendChild(elNewHeading);
  elNewDiv.appendChild(elNewParagraph);
  elNewDiv.appendChild(elNewSpan);
})
}

createElementHtml(pokemons);


form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  elPokemonsWrapper.innerHTML = ``;
  if (typeSelect.value === 'all') {
    createElementHtml(pokemons);
    return;
  }

  var filteredPokemonsByType = pokemons.filter(function(pokemon) {
    var pokemonTypesInLowecase = [];
    pokemon.type.forEach(function(type) {
      pokemonTypesInLowecase.push(type.toLowerCase());
    });
    return pokemonTypesInLowecase.includes(typeSelect.value);
  });
  
  createElementHtml(filteredPokemonsByType);
});
