import "./loginstyle.css";
import { startMenuPage } from "../../pages/menuPage";

//poner primera condicion del landlogin que si localstorage.name entonces, directamente inicie menuPage

export const landLogin = () => {
  const maindiv = document.createElement("div");
  maindiv.classList.add("maindiv");
  const app = document.querySelector("#app");
  app.appendChild(maindiv);
  const loginDiv = document.createElement("div");
  loginDiv.classList.add("logindiv");
  maindiv.appendChild(loginDiv);
  loginDiv.innerHTML = `
        <p class="welcomep">Welcome to Games Hub</p>
        <label for="inputName">Enter your name</label>
        <input type="text" id="inputName"></input>  
        <button id="saveBtn">Log in</button>
    `;

  /*   saveName hace que en el localstorage se guarde un item con clave nombre-nombremetido
  además mira si se cumples ciertas condiciones y luego hace que se vaya a la siguiente página de menú
  las condiciones: si no hay nada, un mensaje. Si hay números otro. Pero ademas, para que no nos imprima
  el mensaje cada vez que le damos al boton de LOG-IN, le hemos puesto la condicion de que si existe algo con 
  el id #errorp, entonces primero nos lo quite y luego ya ejecute el error */

  //SOLO QUEDA QUE DEJE METER SOLO LETRAS

  const errorEmpty = () => {
    const errorp = document.createElement("p");
    errorp.id = "errorp";
    errorp.innerText = `Insert a name`;
    loginDiv.appendChild(errorp);
  };
  const saveName = (person) => {
    localStorage.setItem("name", person);
    if (person.length < 1) {
      if (document.querySelector("#errorp")) {
        loginDiv.lastChild.remove();
        errorEmpty();
      } else {
        errorEmpty();
      }
    } else if (!person.match("[A-Za-z]")) {
      if (document.querySelector("#errorp")) {
        loginDiv.lastChild.remove();
        const errorNumbers = () => {
          //alojamos el error en una funcion para poder reutilizarlo
          const errorp = document.createElement("p");
          errorp.id = "errorp";
          errorp.innerText = `${person} is not a name`;
          loginDiv.appendChild(errorp);
        };
        errorNumbers();
      } else {
        errorNumbers();
      }
    } else {
      startMenuPage();
    }
  };
  const saveBtn = document.querySelector("#saveBtn");
  const inputName = document.querySelector("#inputName");
  saveBtn.addEventListener("click", () => saveName(inputName.value));
};
