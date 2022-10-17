import "./loginstyle.css";
import { startMenuPage } from "../../pages/menuPage";

export const landLogin = () => {
  const maindiv = document.createElement("div");
  maindiv.classList.add("maindiv");
  const app = document.querySelector("#app");
  app.appendChild(maindiv);
  const loginDiv = document.createElement("div");
  loginDiv.classList.add("logindiv");
  maindiv.appendChild(loginDiv);
  loginDiv.innerHTML = `
        <h1>Welcome to Games Hub</h1>
        <label for="inputName">Enter your name</label>
        <input type="text" id="inputName" required></input>  
        <button id="saveBtn">Log in</button>
    `;
  const saveName = (person) => {
    localStorage.setItem("name", person); //hago que en el localstorage se guarde un item con clave nombre-nombremetido
    if (typeof person !== "string") {
      const pwelcome = document.createElement("p");
      pwelcome.innerText = `${person} is not a name`;
      loginDiv.appendChild(pwelcome); //PREGUNTA, COMO HACER PARA QUE PILLE LO DEL NUMERO
    } else if (person.length < 1) {
      const pwelcome = document.createElement("p");
      pwelcome.innerText = `Insert a name`; //PREGUNTA, COMO HACER PARA QUE NO IMPRIMA EL MENSAJE SIEMPRE
      loginDiv.appendChild(pwelcome);
    } else {
      startMenuPage(person);
    }

    //inputName.pattern !== "[A-Za-z]{1,10}"
    /* } else {
      const pwelcome2 = document.createElement("p");
      pwelcome2.innerText = `Welcome ${person}`;
      loginDiv.appendChild(pwelcome2); */
  };
  const saveBtn = document.querySelector("#saveBtn");
  const inputName = document.querySelector("#inputName");
  saveBtn.addEventListener("click", () => saveName(inputName.value));
};
