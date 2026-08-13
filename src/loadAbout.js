
function loadAbout() {
  const parentDiv = document.createElement("div");
  parentDiv.id="about";

  const title = document.createElement("h1");
  title.textContent = "About DJ's Taqueria";
  title.classList.add("title");
  parentDiv.appendChild(title);

  let para = document.createElement("p");
  para.textContent = "This is the web site for DJ's Taqueria";
  para.classList.add("text");
  parentDiv.appendChild(para);

  return parentDiv;
}

export { loadAbout };
