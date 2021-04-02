// keys
const apiKey = '771e0252084f55d7429ca496bc3e5501';
const hash = 'bc8e05b427a30ee4f5a5f6da8059dbf8';
const offset = '20';

async function fetchApi(endpoint) {
  const response = await fetch(endpoint);
  return await response.json();
}

async function getAllHeroes() {
  let url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&offset=${offset}&ts=1&apikey=${apiKey}&hash=${hash}`;
  const allHeroes = await fetchApi(url);
  console.log(allHeroes);
  allHeroes.data.results.map((heroe) => {
    displayHeroes(heroe);
  });
}
getAllHeroes();

async function getHeroSearch(offset) {
  let searchText = $seachInput.val();
  $heroesConteiner.empty();
  let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchText}&offset=${offset}&ts=1&apikey=${apiKey}&hash=${hash}`;
  const heroSearch = await fetchApi(url);
  console.log(heroSearch);
  console.log(searchText);
  heroSearch.data.results.map((heroe) => {
    displayHeroes(heroe);
  });
}

const getSelectedHero = async (id) => {
  let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${apiKey}&hash=${hash}`;
  const result = await fetchApi(url);
  const selectedHeroe = result.data.results[0];
  displaySelectedHero(selectedHeroe);
};

$seachInput.on('input', () => {
  getHeroSearch(0);
});
