import { startMenuPage } from "../pages/menuPage/menuPage";

export const callBtnMenu = () => {
  const header = document.querySelector("header");
  if (document.querySelector("#btnMenu")) {
    header.lastChild.remove();
    const btnMenu = document.createElement("button");
    btnMenu.id = "btnMenu";
    btnMenu.innerText = "Main Menu";
    header.appendChild(btnMenu);
  } else {
    const btnMenu = document.createElement("button");
    btnMenu.id = "btnMenu";
    btnMenu.innerText = "Main Menu";
    header.appendChild(btnMenu);
  }
  btnMenu.addEventListener("click", () => startMenuPage());
};
