import { cleanPage } from "../../utils/cleanpage";

export const pokemonCard = (item) => {
  const maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.innerHTML = `
    <figure class="pokemoncard"> 
            <img class="${item.image3}" src="${item.image3}">
            <div class="description">
                <h2>${item.name}</h2>
                <p class="indivType">Type: ${item.type}</p>
                <p class="height">${item.height}</p>
                <p class="weight">${item.weight}</p>
            </div>
        </figure> 
    `;
};
