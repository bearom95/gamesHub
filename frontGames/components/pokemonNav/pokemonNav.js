import { mappedPokemons } from "../../pages/pokemonPage/pokemonPage";
import { printData } from "../../pages/pokemonPage/pokemonPage";

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
    typeOption.id = `${type}`;
    const selector = document.querySelector("#selector");
    selector.appendChild(typeOption);
  });

  const selectMyType = (mappedPokemons, selectedType) => {
    const filteredList = mappedPokemons.filter(
      (element) => element.type == selectedType
    );
    printData(filteredList);
  };

  selector.addEventListener("change", () => {
    const selector = document.querySelector("#selector");
    selectMyType(mappedPokemons, selector.value);
  });
};

/* export const initSelector = () => {
  const selector = document.querySelector("#selector");
  selector.innerHTML = `
  <option>Water</option>
  <option>Fire</option>
  `;

  selector.addEventListener("change", console.log(selector.value));
}; */
