export default function outsideClick(events, element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((event) => html.addEventListener(event, checkOutsideClick));
    element.setAttribute(outside, "");
  }

  function checkOutsideClick(event) {
    if (!element.contains(event.target)) {
      events.forEach((event) =>
        html.removeEventListener(event, checkOutsideClick)
      );
      element.removeAttribute(outside);
      callback();
    }
  }
}
