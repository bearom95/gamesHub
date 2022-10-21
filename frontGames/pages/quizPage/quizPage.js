import "./quizPage.css";
import { allQuestions } from "../../quizQuestions";
import { cleanPage } from "../../utils/cleanpage";
import { callBtnMenu } from "../../components/menuButton";

let score = 0;
let pos = 0;

export const getQuiz = () => {
  let maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  callBtnMenu();
  maindiv.innerHTML = `
  <h1>Quiz Game</h1>
  <button id="startQuizBtn">Start</button>`;
  const startQuizBtn = document.querySelector("#startQuizBtn");
  startQuizBtn.addEventListener("click", () =>
    printCheckQuestion(allQuestions, pos)
  );
};

//<span class="score">0</span> si quisiera incluir el contador al principio

const checkAnswer = (objeto, clave) => {
  /* console.log(pos); */
  if (pos == allQuestions.length - 1) {
    const endDiv = document.createElement("div");
    let maindiv = document.querySelector(".maindiv");
    cleanPage(maindiv);
    maindiv.appendChild(endDiv);
    endDiv.innerHTML = `
    <p>You're done, your total score is ${score} out of 10</p>
    <button id="retakeBtn">Retake Quiz</button>
    `;
    pos = 0;
    score = 0;
    const retakeBtn = document.querySelector("#retakeBtn");
    retakeBtn.addEventListener("click", () =>
      printCheckQuestion(allQuestions, pos)
    );
  } else if (objeto[clave] == true) {
    score++;
    pos += 1;
    console.log("score" + score);
    printCheckQuestion(allQuestions, pos);
  } else {
    pos += 1;
    console.log(score);
    printCheckQuestion(allQuestions, pos);
  }
};

const printCheckQuestion = (list, value) => {
  const element = list[value];
  let questionDiv = document.createElement("div");
  questionDiv.classList.add("questionDiv");
  let maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.appendChild(questionDiv);
  questionDiv.innerHTML = `
    <h2 id="questionSentence">${pos + 1}. ${element.question}</h2>
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
