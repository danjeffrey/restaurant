// index.js
import "./styles.css";
import { greeting } from "./greeting.js";

import { loadMainPage } from './loadMainPage.js';
import { loadMenu } from './loadMenu.js';
import { loadAbout } from './loadAbout.js';

const content = document.getElementById("content");
const navTab = document.getElementById("mainMenu");
navTab.addEventListener("click", (e) => {
  const pageName = e.target.textContent;
  switch (pageName) {
    case "Menu":
      content.innerHTML = "";
      content.appendChild(loadMenu());
      break;

    case "About":
      content.innerHTML = "";
      content.appendChild(loadAbout());
      break;

    default:
    //   if (divMain.childNodes.length < 1) {
    //     createMain(divMain);
    //   }
      content.innerHTML = "";
      content.appendChild(loadMainPage());
      break;
  }
});

content.appendChild(loadMainPage());
