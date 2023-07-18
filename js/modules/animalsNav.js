export default class AnimalsNav {
  constructor(navItens) {
    this.navItens = [...document.querySelectorAll(navItens)];
    this.activeClass = "active";
    this.activeElement = document.querySelector(
      `[data-animal].${this.activeClass}`
    );
  }

  active(element) {
    this.activeElement.classList.remove(this.activeClass);
    element.classList.add(this.activeClass);
    this.activeElement = element;
  }

  handleClick(event) {
    const animal = event.currentTarget.dataset.animal;
    const css = `.animais-descricao [data-animal="${animal}"]`;
    const target = document.querySelector(css);
    if (target !== this.activeElement) this.active(target);
  }

  listener() {
    this.navItens.forEach((item) => {
      item.addEventListener("click", this.handleClick);
    });
  }

  binder() {
    this.handleClick = this.handleClick.bind(this);
  }

  init() {
    this.binder();
    this.listener();
  }
}
