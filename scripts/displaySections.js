function displayHeroes(heroe) {
  $heroesConteiner.append(`
      <li class="heroe" id="heroe">
      <img class="heroe__icon" src="${heroe.thumbnail.path}.${heroe.thumbnail.extension}"/>
      <p class="heroe__name">${heroe.name}</p>
      </li>
      `);
}

displayHeroes();
