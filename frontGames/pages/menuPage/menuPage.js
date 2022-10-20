import { cleanPage } from "../../utils/cleanpage";
import { getPokemons } from "../pokemonPage/pokemonPage";

export const startMenuPage = () => {
  const maindiv = document.querySelector(".maindiv"); //recoger nombre con getitem???
  cleanPage(maindiv);
  const pokeapiBtn = document.createElement("button");
  pokeapiBtn.innerText = "Pokeapi btn";
  maindiv.appendChild(pokeapiBtn);
  pokeapiBtn.addEventListener("click", () => getPokemons());
  const header = document.querySelector("header");
  if (document.querySelector("#loggedP")) {
    header.firstChild.remove();
    const loggedP = document.createElement("p");
    loggedP.id = "loggedP";
    header.insertAdjacentElement("afterbegin", loggedP);
    loggedP.innerHTML = `Let's play ${localStorage.name}!`;
  } else {
    const loggedP = document.createElement("p");
    loggedP.id = "loggedP";
    header.insertAdjacentElement("afterbegin", loggedP);
    loggedP.innerHTML = `Let's play ${localStorage.name}!`;
  }
  if (document.querySelector("#btnMenu")) {
    header.lastChild.remove();
  }
};
