import odinImage from "./DJsTaqueria.png";


function loadMenu() {
  const parentDiv = document.createElement("div");
  parentDiv.id="menu";

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Tacos";
  menuTitle.classList.add("title");
  parentDiv.appendChild(menuTitle);

  let para = document.createElement("p");
  para.textContent = "Tacos de Carne Asada";
  para.classList.add("text");
  parentDiv.appendChild(para);

  para = document.createElement("p");
  para.textContent = "Tacos de Napoles";
  para.classList.add("text");
  parentDiv.appendChild(para);

  para = document.createElement("p");
  para.textContent = "Tacos de Marlin";
  para.classList.add("text");
  parentDiv.appendChild(para);

  return parentDiv;
}

export { loadMenu };
