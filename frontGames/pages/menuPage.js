import { cleanPage } from "../utils/cleanpage";

export const startMenuPage = (person) => {
  const maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.innerHTML = `<p>Hola ${person}</p>`;
};
//mantener siempre el name????
//crear un div para mantener siempre el nombre y otro en el que se van cabiando los juegos O poner el welcome+name en el header
