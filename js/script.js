function checkJsWorking() {
  document.documentElement.classList.add("js-working");
}
checkJsWorking();

import Scroll from "./modules/scroll.js";
import LinkScroll from "./modules/linkScroll.js";
import AnimalsNav from "./modules/animalsNav.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal.js";
import insertAnimais from "./modules/insertAnimais.js";
import submenuTouch from "./modules/submenuTouch.js";

const scroll = new Scroll("[data-scroll]");
scroll.init();

const linkScroll = new LinkScroll("a[href^='#']");
linkScroll.init();

const animalsNav = new AnimalsNav(".animais-lista li");
animalsNav.init();

const accordion = new Accordion(".faq-lista");
accordion.init();

const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  ".modal"
);
modal.init();

insertAnimais();
submenuTouch(".sobre");
