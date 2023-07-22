import outsideClick from "./outsideClick.js";

export default function (trigger) {
  const link = document.querySelector(trigger);

  const handleClick = function (event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, () => {
      this.classList.remove("ativo");
    });
  };

  link.addEventListener("touchstart", handleClick);
}
