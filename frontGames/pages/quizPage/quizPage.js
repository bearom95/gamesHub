//importar sus estilos
import { allQuestions } from "../../quizQuestions";
import { cleanPage } from "../../utils/cleanpage";

let score = 0;
let pos = 0;

export const getQuiz = () => {
  let maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.innerHTML = `
  <h1>Quiz Game</h1>
  <span class="score">0</span>`;
  printCheckQuestion(allQuestions, pos);
};

const checkAnswer = (objeto, valor) => {
  /* console.log(pos); */
  if (pos == allQuestions.length - 1) {
    console.log("se acabó");
  } else {
    if (objeto[valor] == true) {
      score++;
      pos += 1;
      console.log("score" + score);
      printCheckQuestion(allQuestions, pos);
    } else {
      pos += 1;
      console.log(score);
      printCheckQuestion(allQuestions, pos);
    }
  }
};

const printCheckQuestion = (list, value) => {
  const element = list[value];
  let questionDiv = document.createElement("div");
  let maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.appendChild(questionDiv);
  questionDiv.innerHTML = `
    <h2 id="questionSentence">${element.question}</h2>
    `;

  for (const key in element.answers) {
    let answer = document.createElement("button");
    answer.id = "answer";
    answer.textContent = key;
    answer.addEventListener("click", (evento) =>
      checkAnswer(element.answers, evento.target.innerText)
    );
    questionDiv.appendChild(answer);
  }
};

/* event.target.innerText */
