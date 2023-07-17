function checkJsWorking() {
  document.documentElement.classList.add("js-working");
}
checkJsWorking();

import Scroll from "./modules/scroll.js";
import Accordion from "./modules/accordion.js";

const scroll = new Scroll("[data-scroll]");
scroll.init();

const accordion = new Accordion(".faq-lista");
accordion.init();
