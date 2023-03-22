import { addParaElement, addImageElement } from "./restaurant";

const contentInfo = {
  srcLink1: "../src/assests/contact-img.jpg",
  srcLink2: "../src/assests/map-img.jpg",
  srcLink3: "../src/assests/email-img.png",
  srcLink4: "../src/assests/phone-img.png",
  paraText1: "1. Location ( Kanpur )",
  paraText2: "2. Email ( aatiqafzal1443@gmail.com)",
  paraText3: "3. Phone ( +91 9140678627 )",
};

export function loadContactPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.replaceChildren();

  const heading = document.createElement("h1");
  heading.textContent = "Contact :)";
  heading.classList.add("landing-title");
  contentDiv.appendChild(heading);

  addImageElement(contentDiv, contentInfo.srcLink1);
  addParaElement(contentDiv, contentInfo.paraText1);
  addImageElement(contentDiv, contentInfo.srcLink2);
  addParaElement(contentDiv, contentInfo.paraText2);
  addImageElement(contentDiv, contentInfo.srcLink3);
  addParaElement(contentDiv, contentInfo.paraText3);
  addImageElement(contentDiv, contentInfo.srcLink4);
}