var elPokemonsWrapper = document.querySelector('.js-pokemons-wrapper');

for (var i = 0; i < pokemons.length; i++) {
  var elNewDiv = document.createElement('div');
  elNewDiv.classList.add('pokemon');

  var elNewImg = document.createElement('img');
  elNewImg.classList.add('pokemon__img');
  elNewImg.src = pokemons[i].img;

  var elNewHeading = document.createElement('h3');
  elNewHeading.classList.add('pokemon__name');
  elNewHeading.textContent = pokemons[i].name;

  var elNewParagraph = document.createElement('p');
  elNewParagraph.classList.add('pokemon__type');
  elNewParagraph.textContent = pokemons[i].type;

  elPokemonsWrapper.appendChild(elNewDiv);
  elNewDiv.appendChild(elNewImg);
  elNewDiv.appendChild(elNewHeading);
  elNewDiv.appendChild(elNewParagraph);
}