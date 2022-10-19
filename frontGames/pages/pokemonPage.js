import { initSelector } from "../components/pokemonNav/pokemonNav";
import { cleanPage } from "../utils/cleanpage";
import "./pokemonPage.css";

export let mappedPokemons;

export const getPokemons = async (i) => {
  const maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.innerHTML = `
      <div id="pokeTitle" class="pokeTitle">
        <div class="logocontainer"></div>
        <div class="searchcontainer" id="searchcontainer">
          <input type="text" class="searchPokemon" id="searchPokemon" placeholder="Look for your Pokemon"/>
        </div>
        <select id="selector"></select>
      </div>
      <div class="allpokecards" id="allpokecards"></div>`;
  let pokemonArray = [];
  for (i = 1; i <= 151; i++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      const dataToJson = await response.json();
      pokemonArray.push(dataToJson);
    } catch (error) {
      console.log(error);
    }
  }
  transformData(pokemonArray);
};
const transformData = (list) => {
  mappedPokemons = list.map((item) => ({
    id: item.id,
    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
    experience: item.base_experience,
    height: item.height,
    weight: item.weight,
    type: item.types[0].type.name,
    /* type2: item.types[1].type.name, */
    image: item.sprites.other.dream_world.front_default,
    image2: item.sprites.other.home.front_default,
    image3: item.sprites.other["official-artwork"].front_default,
  }));
  printData(mappedPokemons, "");
};

const printData = (mappedArray, word) => {
  const allPokeCards = document.querySelector("#allpokecards");
  cleanPage(allPokeCards);
  const filteredPokemons = mappedArray.filter((element) =>
    element.name.toLowerCase().includes(word.toLowerCase())
  );

  /* const pokeTitle = document.createElement("h1");
  maindiv.appendChild(pokeTitle);
  const allPokeCards = document.createElement("div");
  maindiv.appendChild(allPokeCards);
 */

  filteredPokemons.forEach((element) => {
    const pokeCard = document.createElement("div");
    allPokeCards.appendChild(pokeCard);
    pokeCard.id = "pokecard";
    pokeCard.classList.add(`${element.type}`);
    pokeCard.innerHTML = `
        <h1>${element.name}</h1>
        <img src="${element.image3}" alt="${element.name3}"/>
        <p>${element.type}</p>`;
    //por cada pokemos crear una tarjeta
  });
  const searchInput = document.querySelector("#searchPokemon");
  searchInput.addEventListener("input", (ev) =>
    printData(mappedPokemons, ev.target.value)
  );
  initSelector();
};
