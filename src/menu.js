import { addParaElement, addImageElement } from "./restaurant";

const menuInfo = {
  srcLink1: "../src/assests/menu-img.jpg",
  srcLink2: "../src/assests/pizza-img.jpg",
  srcLink3: "../src/assests/burger-img.jpg",
  srcLink4: "../src/assests/pasta-img.jpg",
  paraText1: "1. Pizza",
  paraText2: "2. Burger",
  paraText3: "3. Pasta",
};

export function loadMenuPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.replaceChildren();

  const heading = document.createElement("h1");

  heading.textContent = "Menu :)";
  heading.classList.add("landing-title");

  contentDiv.appendChild(heading);

  addImageElement(contentDiv, menuInfo.srcLink1);
  addParaElement(contentDiv, menuInfo.paraText1);
  addImageElement(contentDiv, menuInfo.srcLink2);
  addParaElement(contentDiv, menuInfo.paraText2);
  addImageElement(contentDiv, menuInfo.srcLink3);
  addParaElement(contentDiv, menuInfo.paraText3);
  addImageElement(contentDiv, menuInfo.srcLink4);
}
