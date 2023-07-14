export default class Accordion {
  constructor(faq) {
    this.faq = document.querySelector(faq);
    this.questions = [...this.faq.querySelectorAll("dt")];
    this.activeClass = "active";
  }

  toggleAnswer(event) {
    event.target.classList.toggle(this.activeClass);
  }

  addListener() {
    this.questions.forEach((question) => {
      question.addEventListener("click", this.toggleAnswer);
    });
  }

  binder() {
    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  init() {
    this.binder();
    this.addListener();
    this.questions[0].classList.add(this.activeClass);
  }
}