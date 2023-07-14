function checkJsWorking() {
  document.documentElement.classList.add("js-working");
}
checkJsWorking();

import Accordion from "./modules/accordion.js";

const accordion = new Accordion(".faq-lista");
accordion.init();
