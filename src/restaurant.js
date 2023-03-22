export function addImageElement(contentDiv, srcLink) {
    const menuImage = document.createElement("img");
    menuImage.classList.add("menu-img");
    menuImage.src = srcLink;
    menuImage.alt = "Image of Menu";
    contentDiv.appendChild(menuImage);
  }
  
  export function addParaElement(contentDiv, paraText) {
    const para = document.createElement("p");
    para.classList.add("intro");
    para.textContent = paraText;
    contentDiv.appendChild(para);
  }