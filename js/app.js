const fetchPokemon = async (pokemon) => {

    // the await keywords allows the fetch to wait until all data is "charged" up
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log(APIResponse)
}

fetchPokemon('25');