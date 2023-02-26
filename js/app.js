// variables
const pokemonNum = document.querySelector('#pokemonNum');
const pokemonName = document.querySelector('#pokemonName');
const pokemonImg = document.querySelector('#pokemonImg');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let searchPokemon = 1;

// get the data from the pokemons from the API
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
}

// renders the data we want on the UI
const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading...';
    const data = await fetchPokemon(pokemon);
    if(data){
        pokemonImg.style.display = 'block';
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonNum.innerHTML = data.id;
        pokemonName.innerHTML = data.name;
        input.value = ''; // cleans the input field
        searchPokemon = data.id;
    } else{
        pokemonImg.style.display = 'none';
        pokemonNum.innerHTML = '???';
        pokemonName.innerHTML = 'Not Found';
    }
}

// event listeners on the DOM
form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

btnPrev.addEventListener('click', () => {
    if(searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
})
btnNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
})

renderPokemon(searchPokemon);