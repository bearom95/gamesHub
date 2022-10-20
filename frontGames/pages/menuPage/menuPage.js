import { cleanPage } from "../../utils/cleanpage";
import { getPokemons } from "../pokemonPage/pokemonPage";

export const startMenuPage = () => {
  const maindiv = document.querySelector(".maindiv"); //recoger nombre con getitem???
  cleanPage(maindiv);
  const header = document.querySelector("header");
  const loggedP = document.createElement("p");
  header.insertAdjacentElement("afterbegin", loggedP);
  loggedP.innerHTML = `<p>Let's play ${localStorage.name}!</p>`;
  const pokeapiBtn = document.createElement("button");
  pokeapiBtn.innerText = "Pokeapi btn";
  maindiv.appendChild(pokeapiBtn);
  pokeapiBtn.addEventListener("click", () => getPokemons());

  //aqui añadir el event listener del boton que me lleva  a la pokeapi
};
