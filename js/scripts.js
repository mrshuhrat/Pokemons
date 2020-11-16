var elPokemonsWrapper = document.querySelector('.js-pokemons-wrapper');

// for (var i = 0; i < pokemons.length; i++)
pokemons.forEach(function (pokemon) {
  
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

  var elNewParagraph = createElement('P', 'pokemon__type', pokemon.type);
  /* var elNewParagraph = document.createElement('p');
  elNewParagraph.classList.add('pokemon__type');
  elNewParagraph.textContent = pokemons[i].type; */

  elPokemonsWrapper.appendChild(elNewDiv);
  elNewDiv.appendChild(elNewImg);
  elNewDiv.appendChild(elNewHeading);
  elNewDiv.appendChild(elNewParagraph);
})

  
