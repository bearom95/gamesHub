import "./style.css";
import { changeColor } from "./components/colorBtn";
import { landLogin } from "../frontGames/components/login/login";
changeColor();

const header = document.createElement("header");
const app = document.querySelector("#app");
app.appendChild(header);
header.innerHTML = `<button id="colorBtn">Change color</button>`;

const colorBtn = document.querySelector("#colorBtn");
colorBtn.addEventListener("click", changeColor);

landLogin();
