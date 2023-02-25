const pokemonNum = document.querySelector('#pokemonNum');
const pokemonName = document.querySelector('#pokemonName');
const pokemonImg = document.querySelector('#pokemonImg');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

console.log(pokemonName)

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if (APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonNum.innerHTML = data.id;
    pokemonName.innerHTML = data.name;
    input.value = '';
}



form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value);
})