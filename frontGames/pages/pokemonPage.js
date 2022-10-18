export const getPokemons = async (i) => {
  let pokemonArray = [];
  for (i = 1; i <= 150; i++) {
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
    name: item.name,
    experience: item.base_experience,
    height: item.height,
    weight: item.weight,
    type: item.types[0].type.name,
    image: item.sprites.other.dream_world.front_default,
    image2: item.sprites.other.home.front_default,
    image3: item.sprites.other["official-artwork"].front_default,
  }));
  printData(mappedPokes);
};

const printData = (mappedArray) => {
  mappedArray.forEach((element) => {
    const pokeCard = document.createElement("div");
    const maindiv = document.querySelector(".maindiv");
    maindiv.appendChild(pokeCard);
    pokeCard.innerHTML = `
        <p>${element.name}</p>
        <img src="${element.image}" alt="${element.name}"/>`;
    //por cada pokemos crear un
  });
};
