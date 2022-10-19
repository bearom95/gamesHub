import { mappedPokemons } from "../../pages/pokemonPage";

export const initSelector = () => {
  let allTypesArray = [];
  let nonRepeatedTypes = [];
  mappedPokemons.forEach((pokemon) => {
    allTypesArray.push(pokemon.type);
  });

  for (const type of allTypesArray) {
    if (nonRepeatedTypes.includes(type) == false) {
      nonRepeatedTypes.push(type);
    }
  }

  nonRepeatedTypes.forEach((type) => {
    const typeOption = document.createElement("option");
    typeOption.innerText = type;
    const selector = document.querySelector("#selector");
    selector.appendChild(typeOption);
  });
};
