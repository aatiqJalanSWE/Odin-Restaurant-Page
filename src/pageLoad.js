import { addParaElement } from "./restaurant";

const homeInfo = {
    paraText1: "lorem ipsum dolor sit amet, consectet",
    paraText2: "lorem ipsum dolor sit amet, consectet",
    paraText3: "lorem ipsum dolor sit amet, consectet",
};

export function loadInitialPage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Luxurious Restaurant :)";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("top-img");
    topImage.src = "https://images.jdmagicbox.com/comp/kanpur/g6/0512px512.x512.180514200244.e4g6/catalogue/vessel-restaurant-anwarganj-kanpur-home-delivery-restaurants-2cn0s.jpg?clr=#334125";
    topImage.alt = "Image of Restaurant";
    contentDiv.appendChild(topImage);

    addParaElement(contentDiv, homeInfo.paraText1);
    addParaElement(contentDiv, homeInfo.paraText2);
    addParaElement(contentDiv, homeInfo.paraText3);
}