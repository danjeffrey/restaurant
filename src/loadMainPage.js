import odinImage from "./DJsTaqueria.png";


function loadMainPage() {
  const parentDiv = document.createElement("div");
  parentDiv.id="mainPage";

  const image = document.createElement("img");
  image.src = odinImage;
  image.classList.add("logo");
  parentDiv.appendChild(image);

  const title = document.createElement("h1");
  title.textContent = "DJ's Taqueria";
  title.classList.add("title");
  parentDiv.appendChild(title);

  const para1 = document.createElement("p");
  para1.textContent = "Come enjoy our awesome tacos.";
  title.classList.add("text");
  parentDiv.appendChild(para1);

  return parentDiv;
}

export { loadMainPage };
