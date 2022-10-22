import { cleanPage } from "../../utils/cleanpage";
import { callBtnMenu } from "../../components/menuButton";
import { allWords } from "./hangWords";

let position = 0;

const getRandomWord = (array) => {
  let word = array[position];
  let wordcontainer = document.querySelector("#wordcontainer");
  const wordSpace = document.createElement("p");
  wordSpace.classList.add("hiddenWord");
  /* wordSpace.innerText = word; */
  wordcontainer.appendChild(wordSpace);
  //word es la palabra buscada, for letter of word

  for (const letter of word) {
    let emptyLetter = document.createElement("p");
    emptyLetter.innerText = "_";
    wordSpace.appendChild(emptyLetter);

    // aqui debo llamar a la funcion checkLetter, que debemos crear fuera (no se en que lugar),
    //puede que arriba??esta funcion es la que me compara si la letra es igual a la que se ha metido
    //de ser asi, hace que el _ se convierta en la letra y si no, le baja al score un punto, hay que crear score en 5
    if (letter == chosenLetter) {
      emptyLetter.innerText = chosenLetter;
    }
  }

  if (document.querySelector(".hiddenWord")) {
    cleanPage(wordcontainer);
    wordcontainer.appendChild(wordSpace);
  } else {
    wordcontainer.appendChild(wordSpace);
  }
  if (position == array.length - 1) {
    position = 0;
  } else {
    position += 1;
  }
};

const chargeCategory = (categories, selectedCategory) => {
  let maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.innerHTML = `
    <div id="gameContainer">
        <p>${selectedCategory}</p>
        <div id="wordcontainer">
        
        </div>
        <input type="text" id="inputLetter" maxlength=1 placeholder="Choose a letter">
        <button id="nextBtn">Next</button>
    </div>
  `;

  /*  for (let subelement of categories[selectedCategory]) {
    console.log(subelement);
  } */
  getRandomWord(categories[selectedCategory]);
  const nextBtn = document.querySelector("#nextBtn");
  nextBtn.addEventListener("click", () =>
    getRandomWord(categories[selectedCategory])
  );

  //este event listener va aqui pero tiene que llamar a una funcion, por ejemplo: checkLetter
  //a esa funcion se le pasa por parametro evento.target.value, en vez de igualarlo a una const
  let inputLetter = document.querySelector("#inputLetter");
  inputLetter.addEventListener("input", (evento) => {
    let chosenLetter = evento.target.value;
    console.log(chosenLetter);
  });
};

export const getHangman = () => {
  let maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  callBtnMenu();
  maindiv.innerHTML = `
  <div id="introHangman" class="introHangman">
    <h1>Hangman Game</h1>
    <div id="btnsDiv" class="btnsDiv">
      
    </div>
  </div>`;
  printBtns(allWords);
};

const printBtns = (object) => {
  for (const key in object) {
    const categoryBtn = document.createElement("button");
    categoryBtn.id = " categoryBtn";
    let btnsDiv = document.querySelector("#btnsDiv");
    btnsDiv.appendChild(categoryBtn);
    categoryBtn.innerText = key;
    categoryBtn.addEventListener("click", (event) =>
      chargeCategory(object, event.target.innerText)
    );
  }
};

/* <button id="colorsBtn">Colors</button>
<button id="animalsBtn">Animals</button>
<button id="thingsBtn">Things</button>
<button id="foodBtn">Food</button>
<button id="countriesBtn">Countries</button> */
