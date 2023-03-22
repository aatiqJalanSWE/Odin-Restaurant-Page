import { loadInitialPage } from "./pageLoad";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";

loadInitialPage();

const tabSwitchingModule = (function () {
  const homeTab = document.querySelector(".home");
  homeTab.addEventListener("click", loadInitialPage);

  const menuTab = document.querySelector(".menu");
  menuTab.addEventListener("click", loadMenuPage);

  const contactTab = document.querySelector(".contact");
  contactTab.addEventListener("click", loadContactPage);
})();
