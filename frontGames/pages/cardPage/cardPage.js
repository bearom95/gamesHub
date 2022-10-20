import { cleanPage } from "../../utils/cleanpage";
import "./cardPage.css";

export const printPokemonCard = (item) => {
  const maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.innerHTML = `
    <figure class="pokemoncard"> 
            <img class="${item.image3}" src="${item.image3}">
            <div class="description">
                <h2>${item.name}</h2>
                <p class="indivType">Type: ${item.type}</p>
                <p class="height">Height: ${item.height} m</p>
                <p class="weight">Weight: ${item.weight} kg</p>
            </div>
        </figure> 
    `;
};
