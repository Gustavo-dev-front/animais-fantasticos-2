import debounce from "./debounce.js";

export default class Scroll {
  constructor(elements) {
    this.elements = [...document.querySelectorAll(elements)];
    this.distances;
  }

  checkVisible(scrollY, elementDistance, halfWindowHeight) {
    if (scrollY < elementDistance - halfWindowHeight) return false;
    else return true;
  }

  checkDistance() {
    this.distances.forEach((element) => {
      const halfWindowHeight = window.innerHeight * 0.6;
      const visible = this.checkVisible(
        window.scrollY,
        element.distance,
        halfWindowHeight
      );
      if (visible) element.element.dataset.scroll = "on";
      else element.element.dataset.scroll = "off";
    });
  }

  getDistances() {
    this.distances = this.elements.map((element) => {
      return { element: element, distance: element.offsetTop };
    });
  }

  binder() {
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  init() {
    this.getDistances();
    this.binder();
    window.addEventListener("scroll", this.checkDistance);
    this.elements[0].dataset.scroll = "on";
    return this;
  }
}
