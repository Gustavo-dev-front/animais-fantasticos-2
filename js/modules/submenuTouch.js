import outsideClick from "./outsideClick.js";

export default function (trigger) {
  const link = document.querySelector(trigger);
  const events = ["touchstart", "click"];

  const handleClick = function (event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(events, this, () => {
      this.classList.remove("ativo");
    });
  };

  events.forEach((event) => link.addEventListener(event, handleClick));
}
