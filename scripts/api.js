// keys
const apiKey = '771e0252084f55d7429ca496bc3e5501';
const hash = 'bc8e05b427a30ee4f5a5f6da8059dbf8';

async function fetchApi(endpoint) {
  const response = await fetch(endpoint);
  return await response.json();
}

async function getAllHeroes(offset) {
  $loaderContainer.removeClass('hide').addClass('loader-container');
  $heroesConteiner.html('');
  let url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&offset=${offset}&ts=1&apikey=${apiKey}&hash=${hash}`;
  const allHeroes = await fetchApi(url);
  console.log(allHeroes);
  setPaginationBtns(allHeroes, false);
  allHeroes.data.results.map((heroe) => {
    displayHeroes(heroe);
  });
  sessionStorage.setItem('offset', offset);
  $loaderContainer.addClass('hide').removeClass('loader-container');
}
getAllHeroes(0);

async function getHeroSearch(offset) {
  let searchText = $seachInput.val();
  $heroesConteiner.empty();
  let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchText}&offset=${offset}&ts=1&apikey=${apiKey}&hash=${hash}`;
  const heroSearch = await fetchApi(url);
  setPaginationBtns(heroSearch, true);
  let searchData = await heroSearch.data.results.length;
  searchData > 0
    ? heroSearch.data.results.map((heroe) => displayHeroes(heroe))
    : displayError('No matches found.');
}

async function getHeroeComics(heroeId) {
  let comicsArr = [];
  let url = `https://gateway.marvel.com:443/v1/public/characters/${heroeId}/comics?limit=3&ts=1&apikey=${apiKey}&hash=${hash}`;
  const heroeComics = await fetchApi(url);
  const comicsData = heroeComics.data.results;
  comicsArr.push(comicsData);
  return comicsArr;
}

const getSelectedHero = async (id) => {
  let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${apiKey}&hash=${hash}`;
  const result = await fetchApi(url);
  const selectedHeroe = result.data.results[0];
  const comics = await getHeroeComics(id);
  displaySelectedHero(selectedHeroe, comics);
  getHeroeComics(id);
};

$seachInput.on('input', () => {
  $heroesConteiner.html('');
  if (
    $seachInput.val() == 0 ||
    $seachInput.val() == null ||
    $seachInput.val() == ''
  ) {
    getAllHeroes(0);
  } else {
    getHeroSearch(0);
  }
});

$seachInput.on('keypress', (e) => {
  if (e.which == 13) {
    getHeroSearch(0);
  }
});
