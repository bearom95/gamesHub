import { cleanPage } from "../../utils/cleanpage";
import { callBtnMenu } from "../../components/menuButton";
import { allWords } from "./hangWords";
import "./hangman.css";

let position = 0;
let score = 5;

function getSpaces(array) {
  let word = array[position];
  let index = 0;
  score = 5;
  for (const letter of word) {
    let emptyLetter = document.createElement("p");
    emptyLetter.classList.add("emptyLetter");
    emptyLetter.id = index;
    emptyLetter.innerText = "_";
    const wordSpace = document.querySelector(".hiddenWord");
    wordSpace.appendChild(emptyLetter);
    index++;
  }
}
const checkLetter = (array, chosenLetter) => {
  let wordi = array[position];
  let index = 0;

  for (const letter of wordi) {
    let emptyLetter = document.getElementById(index);
    if (letter.toLowerCase() == chosenLetter) {
      emptyLetter.innerText = `${chosenLetter}`;
    }
    index++;
  }

  if (
    wordi.includes(chosenLetter) == false &&
    chosenLetter.match(/^[a-zA-Z]+$/) /* chosenLetter != "" */
  ) {
    score = score - 1;
    //para este checkeo está en realidad tomando como wordi otra palabra
    //la posicion se ha incrementado
  }
  if (document.querySelector("span")) {
    document.querySelector("span").remove();
    let gameContainer = document.querySelector("#gameContainer");
    let scoreSpan = document.createElement("span");
    scoreSpan.innerText = `${score}/5`;
    gameContainer.insertAdjacentElement("beforeend", scoreSpan);
  } else {
    let gameContainer = document.querySelector("#gameContainer");
    let scoreSpan = document.createElement("span");
    scoreSpan.innerText = `${score}/5`;
    gameContainer.insertAdjacentElement("beforeend", scoreSpan);
  }

  console.log(score);
};

function getWord(array) {
  score = 5;
  let word = array[position];
  if (position == array.length - 1) {
    position = 0;
  } else {
    position += 1;
  }
  return word;
}

function createWordDiv() {
  let wordcontainer = document.querySelector("#wordcontainer");
  const wordSpace = document.createElement("div");
  wordSpace.classList.add("hiddenWord");
  wordcontainer.appendChild(wordSpace);
  if (document.querySelector(".hiddenWord")) {
    cleanPage(wordcontainer);
    wordcontainer.appendChild(wordSpace);
  } else {
    wordcontainer.appendChild(wordSpace);
  }
}

const chargeCategory = (categories, selectedCategory) => {
  let maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.innerHTML = `
    <div id="gameContainer">
        <p class="titleCategory">${selectedCategory}</p>
        <div id="wordcontainer">
        
        </div>
        <input type="text" id="inputLetter" maxlength=1 placeholder="Choose a letter">
        <button id="nextBtn">Next</button>
    </div>
  `;

  createWordDiv();
  let word = categories[selectedCategory];
  getSpaces(word);

  const nextBtn = document.querySelector("#nextBtn");
  nextBtn.addEventListener("click", () => {
    score = 5;
    createWordDiv();
    let word = getWord(categories[selectedCategory]);
    getSpaces(categories[selectedCategory]);

    if (document.querySelector("span")) {
      document.querySelector("span").remove();
      let gameContainer = document.querySelector("#gameContainer");
      let scoreSpan = document.createElement("span");
      scoreSpan.innerText = `${score}/5`;
      gameContainer.insertAdjacentElement("beforeend", scoreSpan);
    } else {
      let gameContainer = document.querySelector("#gameContainer");
      let scoreSpan = document.createElement("span");
      scoreSpan.innerText = `${score}/5`;
      gameContainer.insertAdjacentElement("beforeend", scoreSpan);
    }

    let inputLetter = document.querySelector("#inputLetter");
    inputLetter.addEventListener("input", (evento) => {
      let chosenLetter = evento.target.value;
      checkLetter(categories[selectedCategory], chosenLetter);
    });
  });

  let inputLetter = document.querySelector("#inputLetter");
  inputLetter.addEventListener("input", (evento) => {
    let chosenLetter = evento.target.value;
    checkLetter(word, chosenLetter);
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
