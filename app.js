// POKEDEX PROJECT
const  pokeContainer = document.querySelector(`#container`);
// Number of Pokemon (Objects) in the PokeAPI. Using the first 150 pokemon
const numOfPokemon = 150;

// The createPokeCard function creates a new card/section and adds the new card webpage/document inside of the "container" div
createPokeCard = (pokemon) => {
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    // Setting the innerHTML for new card using data/object that is passed into the pokemon parameter. Also, using the toUpperCase method on the pokemon name so it will display in uppercase text
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}" >
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}

// The getPokemonData function makes an Axios Get request to the PokeAPI using a specific pokemon ID/number then takes the returned data and passes it into the createPokeCard function
getPokemonData = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData);
    console.log(pokemonData.data.name);
    console.log(pokemonData.data.sprites.front_shiny);
    createPokeCard(pokemonData);
}

// The getPokemon function loops through all the pokemon IDs and runs/executes the getPokemonData function for each ID
getPokemon = async () => {
    for (i = 1; i <= numOfPokemon; i++){
        await getPokemonData(i);
    }
}
getPokemon();