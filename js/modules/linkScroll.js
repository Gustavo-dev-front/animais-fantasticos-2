export default class LinkScroll {
  constructor(links) {
    this.links = [...document.querySelectorAll(links)];
  }

  handleClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }

  listener() {
    this.links.forEach((link) =>
      link.addEventListener("click", this.handleClick)
    );
  }

  init() {
    this.listener();
    return this;
  }
}
