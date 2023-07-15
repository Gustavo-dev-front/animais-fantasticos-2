export default class Scroll {
  constructor(elements) {
    this.elements = [...document.querySelectorAll(elements)];
  }

  getDistances() {
    this.distances = this.elements.map((element) => {
      return { element: element, distance: element.offsetTop };
    });
  }

  init() {
    this.getDistances();
    console.log(this.distances);
  }
}
