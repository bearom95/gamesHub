import { cleanPage } from "../utils/cleanpage";
import "./pokemonPage.css";

export const getPokemons = async (i) => {
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
  const mappedPokes = list.map((item) => ({
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
  printData(mappedPokes);
};

const printData = (mappedArray) => {
  const maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.innerHTML = `
      <div id="pokeTitle" class="pokeTitle">
        <div class="logocontainer"></div>
        <div class="searchcontainer" id="searchcontainer">
          <input type="text" class="searchPokemon" id="searchPokemon"/>
          <button class="btnFindPokemon" id=class="btnFindPokemon">Find a pokemon</button>
        </div>
        <div class="btnsTypesContainer" id="btnsTypesContainer">
          <button>Grass</button>
          <button>Grass</button>
        </div>
      </div>
      <div class="allpokecards" id="allpokecards"></div>`;

  /* const pokeTitle = document.createElement("h1");
  maindiv.appendChild(pokeTitle);
  const allPokeCards = document.createElement("div");
  maindiv.appendChild(allPokeCards);
 */

  mappedArray.forEach((element) => {
    const pokeCard = document.createElement("div");
    const allPokeCards = document.querySelector("#allpokecards");
    allPokeCards.appendChild(pokeCard);
    pokeCard.id = "pokecard";
    pokeCard.innerHTML = `
        <h1>${element.name}</h1>
        <img src="${element.image3}" alt="${element.name3}"/>
        <p>${element.type}</p>`;
    //por cada pokemos crear una tarjeta
  });
};
