export default function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    html.addEventListener("touchstart", checkOutsideClick);
    element.setAttribute(outside, "");
  }

  function checkOutsideClick(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener("touchstart", checkOutsideClick);
      element.removeAttribute(outside);
      callback();
    }
  }
}
